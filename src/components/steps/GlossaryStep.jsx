import React from 'react';

const GlossaryStep = () => {
  return (
    <div>
      <div className="content-module">
        <h3>AI-LLM Glossary</h3>
        <p className="text-gray-600">Key terms and concepts for understanding language model technology.</p>
        <div className="flex items-center mt-2">
          <img src="images/model.png" alt="AI Model" className="h-8 w-auto mr-2 opacity-70" />
          <span className="text-sm text-gray-500">A reference guide to essential AI terminology</span>
        </div>
      </div>
      
      <div className="content-module">
        <h3>Key Concepts</h3>
        <div className="space-y-3 mt-2">
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <h4 className="text-blue-800 font-medium">Generative AI</h4>
            <p className="text-sm text-gray-700">A subset of artificial intelligence that processes natural language input to generate content (text, images, or music) based on patterns from training data.</p>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <h4 className="text-blue-800 font-medium">Large Language Model (LLM)</h4>
            <p className="text-sm text-gray-700">A transformer-based neural network with billions of parameters, trained on vast text corpora to predict and generate language.</p>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <h4 className="text-blue-800 font-medium">Vision Language Model (VLM)</h4>
            <p className="text-sm text-gray-700">A model that processes and interprets visual data (images) to extract information, used for tasks involving both text and images.</p>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <h4 className="text-blue-800 font-medium">Training Data</h4>
            <p className="text-sm text-gray-700">Sprawling codex of text and/or image data whose statistical patterns guide the behavior of AI models trained on it.</p>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <h4 className="text-blue-800 font-medium">Token</h4>
            <p className="text-sm text-gray-700">A small unit of text (often a word or sub-word) that the model processes and predicts sequentially.</p>
          </div>
        </div>
      </div>
      
      <div className="content-module">
        <h3>Prompting Methods</h3>
        <div className="space-y-3 mt-2">
          <div className="border-l-4 border-purple-400 pl-3 py-1">
            <h4 className="text-purple-800 font-medium">Prompt</h4>
            <p className="text-sm text-gray-700">The explicit instruction or input you provide to a language model to elicit a response.</p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-3 py-1">
            <h4 className="text-purple-800 font-medium">System Message</h4>
            <p className="text-sm text-gray-700">A special instruction at the start of a conversation that sets persistent rules and behavior for the model, distinct from user prompts.</p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-3 py-1">
            <h4 className="text-purple-800 font-medium">Temperature</h4>
            <p className="text-sm text-gray-700">A sampling parameter (0–2) that controls output randomness: lower values make responses more focused while higher values increase creativity.</p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-3 py-1">
            <h4 className="text-purple-800 font-medium">Top-p</h4>
            <p className="text-sm text-gray-700">Helps decide which words (tokens) a model should consider when generating text, balancing common words and more varied options.</p>
          </div>
        </div>
      </div>
      
      <div className="content-module">
        <h3>Advanced Techniques</h3>
        <div className="space-y-3 mt-2">
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <h4 className="text-green-800 font-medium">Prompt Engineering</h4>
            <p className="text-sm text-gray-700">The systematic practice of designing, testing, and refining prompts to achieve specific outputs.</p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <h4 className="text-green-800 font-medium">Fine-Tuning</h4>
            <p className="text-sm text-gray-700">Further training a pre-trained model on custom labeled data to specialize its behavior for particular tasks.</p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <h4 className="text-green-800 font-medium">Batch Prompting</h4>
            <p className="text-sm text-gray-700">A method for submitting multiple prompt variations at once to compare outputs efficiently.</p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <h4 className="text-green-800 font-medium">OCR (Optical Character Recognition)</h4>
            <p className="text-sm text-gray-700">Technology that converts different types of documents into editable and searchable text data.</p>
          </div>
        </div>
      </div>
      
      <div className="content-module">
        <h3>Infrastructure</h3>
        <div className="space-y-3 mt-2">
          <div className="border-l-4 border-amber-400 pl-3 py-1">
            <h4 className="text-amber-800 font-medium">API</h4>
            <p className="text-sm text-gray-700">Application Programming Interface – protocols that allow different software to communicate, enabling interactions with AI models.</p>
          </div>
          
          <div className="border-l-4 border-amber-400 pl-3 py-1">
            <h4 className="text-amber-800 font-medium">API Key</h4>
            <p className="text-sm text-gray-700">A unique code used to authenticate and authorize access to an API, ensuring secure and controlled usage.</p>
          </div>
          
          <div className="border-l-4 border-amber-400 pl-3 py-1">
            <h4 className="text-amber-800 font-medium">Model Provider</h4>
            <p className="text-sm text-gray-700">The organization or platform that hosts and provides access to a specific AI model via an API.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlossaryStep;
