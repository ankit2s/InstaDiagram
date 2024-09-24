InstaDiagram 

Problem Statement - Creating Modeling diagrams is very essential at any stage of development & for Data Science, and this is a time-consuming process. With this hack we want to make diagrams in no time!

Key Features:

Instant diagram generation from user prompts
Diagram generation using hand-drawn sketches.
Enhancing an existing image.

We plan to generate the mermaid code using a LLM via a prompt.

Example how to run the python code to generate an image from the given mermaid code - 
command=>python .\render_mermiad.py --code "graph LR; A-->B; B-->C;" --output diagram.png
