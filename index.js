import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory (required for path resolution)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors()); // Allow CORS for all routes
app.use(express.json()); // Parse JSON request bodies

const PORT = process.env.PORT || 5000;
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'insta-diagram/build')));

// Proxy route to handle API requests
app.post('/api/proxy', async (req, res) => {
  const { prompt } = req.body;  // Extract prompt from request body
  const finalPrompt = createPrompt(prompt); // Create the final prompt to send to the API
  try {
    // Make the API call to your target API
    const apiResponse = await fetch (
        '<your-api-to-call-gpt>', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'InferenceAPIKey': '<your-api-key>'
          },
          body: JSON.stringify({ 
            prompt: finalPrompt,
            max_tokens: 2000,
            temperature: 0,
            top_p: 0.8,
            frequency_penalty: 0,
            presence_penalty: 0,
            model: 'gpt4o',
            n: 1,
            best_of: 1,
            logprobs: 1,
            stop: ["<|fim_suffix|>", "<|im_end|>"]
          }), // Send the user prompt
        }
      );

    const data = await apiResponse.json();
    console.log(data);
    res.json(data); // Send the API response back to the React app
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// Handles any requests that don't match one above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'insta-diagram/build', 'index.html'));
});
// Start the server
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));

//function to create a final prompt to send to the API
function createPrompt(prompt) {
  //read a md file
    const filePath = path.resolve('Text2DiagramPrompt.md');
    const data = fs.readFileSync(filePath, 'utf8');
    //Replace the {user_prompt} with prompt 
    const finalPrompt = data.replace('{user_prompt}', prompt);
    console.log(finalPrompt);``
    return finalPrompt;
}