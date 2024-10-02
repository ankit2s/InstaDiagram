import React, { useState, useEffect, useRef } from 'react';
import mermaid from 'mermaid';

function App() {
  const [promptValue, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [mermaidCode, setMermaidCode] = useState('');
  //const [diagram, setDiagram] = useState('');
  const [renderCounter, setRenderCounter] = useState(0);
  const diagramRef = useRef(null);

  useEffect(() => {
    // Initialize Mermaid only once when the component is first rendered
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: { useMaxWidth: true },
    });
  }, []);

  
  // Always re-render the mermaid code whether it changes or not
  useEffect(() => {
    if (mermaidCode) {
      // Use a timeout to allow DOM updates to finish before rendering
      const renderDiagram = async () => {
        try {
          // Clear the diagram container before rendering
          if (diagramRef.current) {
            diagramRef.current.innerHTML = '';
          }
  
          // Force a re-render by modifying the code slightly (add a comment)
          const codeWithUniqueComment = `${mermaidCode} %% render ${renderCounter}`;
  
          const { svg } = await mermaid.render(`generatedDiagram-${renderCounter}`, codeWithUniqueComment);
  
          // Set the inner HTML of the diagramRef container
          if (diagramRef.current) {
            diagramRef.current.innerHTML = svg; // Update the inner HTML with the generated SVG
          }
        } catch (error) {
          console.error('Mermaid rendering error:', error);
        }
      };
      renderDiagram();
    }
  }, [mermaidCode, renderCounter]);
  

  // Extract and clean the Mermaid code from the API response
  const extractAndCleanMermaidCode = (output) => {
    // Regex to extract the mermaid code block
    const regex = /graph\sTD;([\s\S]*?)(?=```)/;  
    let match = output.match(regex);

    if (match) {
      let mermaidCode = match[0].trim();

      // Clean up the incorrect style and attribute lines
      mermaidCode = mermaidCode.replace(/\s+,/g, ',') // Remove extra spaces before commas
                               .replace(/\s+;\s+/g, ';') // Fix semi-colon spaces
                               .replace(/\s*stroke\s+:/g, 'stroke:') // Fix stroke formatting
                               .replace(/\s*fill\s+:/g, 'fill:') // Fix fill formatting
                               .replace(/\s*stroke-width\s+:/g, 'stroke-width:'); // Fix stroke-width formatting

      // Handle any remaining problematic lines (you can add more specific fixes here)
      mermaidCode = mermaidCode.replace(/style\s.*collaB.*;/gi, ''); // Remove invalid lines like 'collaB'

      mermaidCode = mermaidCode.replace(/\\n/g, '\n');

      return mermaidCode;
    }
    throw new Error('Mermaid code not found');
  };

  const apiUrl = process.env.REACT_APP_API_URL;

  // Simulate API call to generate Mermaid code
  const generateDiagram = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: promptValue,
          max_tokens: 2000,
          temperature: 0,
          top_p: 0.8,
          frequency_penalty: 1,
          presence_penalty: 1,
          model: '<model>',
          n: 1,
          best_of: 1,
          logprobs: 1,
          stop: ["<|fim_suffix|>"]
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      const output = await response.json();

      const mermaidCode = extractAndCleanMermaidCode(JSON.stringify(output));
      console.log(mermaidCode);

      setMermaidCode(mermaidCode);
      //setDiagram(mermaidCode);
      setRenderCounter((prev) => prev + 1)

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Allow new lines with Shift + Enter
      e.preventDefault(); // Prevent the default behavior of Enter key
      generateDiagram();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">InstaDiagram</h1>

        <div className="flex flex-col space-y-2 mb-4">
          <textarea
            className="w-full px-4 py-2 border rounded-lg resize-none"
            placeholder="Enter prompt for diagram generation"
            value={promptValue}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={4} // Set the number of visible rows
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={generateDiagram}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>

        {/* Loading spinner */}
        {loading && (
          <div className="flex items-center justify-center mb-4">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            <span className="ml-4 text-lg text-gray-600">Processing/Generating...</span>
          </div>
        )}

        {/* Displaying Mermaid Code and Diagram */}
        {!loading && mermaidCode && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Generated Mermaid Code:</h2>
            <pre className="bg-gray-200 p-4 rounded-md mb-4">{mermaidCode}</pre>

            <h2 className="text-xl font-semibold mb-2">Diagram:</h2>
            <div className="bg-gray-200 p-4 rounded-md">
              {/* Render the diagram */}
              <div className="mermaid" ref={diagramRef} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
