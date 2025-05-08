import React from 'react';

const PromptingExercisesStep = () => {
  return (
    <div>
      <div className="content-module">
        <h3>Prompting Exercises</h3>
        <p className="text-gray-600">Hands-on tasks to practice effective prompting techniques with different models.</p>
      </div>
      
      <div className="content-module">
        <h3>Task 1: Document Completion</h3>
        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
          <li>Paste a paragraph from a primary source</li>
          <li>Use this prompt template:
            <div className="bg-gray-50 border border-gray-200 rounded p-3 my-2 font-mono text-sm text-gray-800 whitespace-pre-wrap">Complete the paragraph based on this incomplete excerpt from a primary source:
[insert-primary-source]</div>
          </li>
          <li>Experiment with different temperature settings:</li>
        </ol>
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-sm font-medium text-blue-700">Pro Tip</span>
          </div>
          <p className="text-sm text-blue-800">
            Try the same prompt with Temperature 0.2, 0.7, and 1.0 to see how the model's creativity changes.
          </p>
        </div>
        
        <figure className="w-full">
          <img 
            src="images/temperature.png" 
            alt="Comparison of output between temperature settings" 
            className="border rounded-lg shadow-sm my-2 max-w-full w-full"
          />
          <figcaption className="text-sm text-gray-500 mt-1">
            <strong>Temperature comparison:</strong> Lower values (0.2) produce more consistent, focused responses while higher values (0.8) introduce more creativity and variation.
          </figcaption>
        </figure>
      </div>

      <div className="content-module">
        <h3>Task 2: Document Understanding</h3>
        <p className="text-gray-600 mb-3">Use vision models to analyze and transcribe historical documents.</p>
        
        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
          <li>Find the image of a historical document</li>
          <li>Select a vision-capable model:
            <div className="flex flex-wrap gap-2 my-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono">openai/gpt-4o</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-mono">anthropic/claude-3-sonnet</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono">google/gemini-pro-vision</span>
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-mono">mistralai/pixtral-12b</span>
            </div>
          </li>
          <li>Use this system message:
            <div className="bg-gray-50 border border-gray-200 rounded p-3 my-2 font-mono text-sm text-gray-800 whitespace-pre-wrap">You are an advanced OCR processing tool for parsing and transcribing historical materials with mixed media, multiple formats, and/or challenging handwriting.</div>
          </li>
          <li>Paste this "seed input" and attach your image:
            <div className="bg-gray-50 border border-gray-200 rounded p-3 my-2 font-mono text-sm text-gray-800 whitespace-pre-wrap">Transcribe the attached image of the document with alt-text for mixed media or embedded images, filling as Dublin Core fields where present and grounded in the input file, which the user will provide.</div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PromptingExercisesStep;
