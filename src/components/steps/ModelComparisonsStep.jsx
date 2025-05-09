import React from 'react';
import KeyTermsFooter from '../KeyTermsFooter';

const ModelComparisonsStep = () => {
  return (
    <div>
<div className="content-module">
  <h3 className="text-2xl font-bold text-gray-800 mb-3">Vision-Capable Models Comparison</h3>
  <p className="text-gray-600 mb-4">Explore how different vision-language models analyze and interpret the same visual inputs.</p>
</div>
      
      <div className="content-module bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6 my-6">
        
        <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
          <h5 className="font-medium text-blue-800 mb-2">Instructions</h5>
          <ol className="list-decimal list-outside ml-6 space-y-3 mb-4 text-gray-700">
            <li className="pb-2">Find an image of a historical document, manuscript, or complex visual text</li>
            <li className="pb-2">Select a vision-capable model:
              <div className="flex flex-wrap gap-2 my-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono">openai/gpt-4o</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-mono">anthropic/claude-3-sonnet</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono">google/gemini-pro-vision</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-mono">mistralai/pixtral-12b</span>
              </div>
            </li>
            <li className="pb-2">Use this system message:
              <div className="bg-gray-50 border border-gray-200 rounded p-3 my-2 font-mono text-sm text-gray-800 whitespace-pre-wrap">You are an advanced OCR processing tool for parsing and transcribing historical materials with mixed media, multiple formats, and/or challenging handwriting.</div>
            </li>
            <li>Paste this prompt and attach your image:
              <div className="bg-gray-50 border border-gray-200 rounded p-3 my-2 font-mono text-sm text-gray-800 whitespace-pre-wrap">Transcribe the attached image of the document with alt-text for mixed media or embedded images, filling as Dublin Core fields where present and grounded in the input file, which the user will provide.</div>
            </li>
          </ol>
        </div>
        
        <div className="flex gap-4 flex-wrap">
          <div className="bg-green-50 border border-green-100 rounded-md p-3 flex-1 min-w-[250px]">
            <h5 className="text-sm font-medium text-green-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              What to Compare
            </h5>
            <ul className="mt-2 text-xs text-green-700 space-y-1 list-disc list-inside">
              <li>Accuracy of text transcription</li>
              <li>Quality of image description</li>
              <li>Handling of ambiguous elements</li>
              <li>Organization of output</li>
              <li>Metadata identification</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-md p-3 flex-1 min-w-[250px]">
            <h5 className="text-sm font-medium text-blue-800 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              Tips for Better Results
            </h5>
            <ul className="mt-2 text-xs text-blue-700 space-y-1 list-disc list-inside">
              <li>Use high-resolution, clear images</li>
              <li>Try multiple models for comparison</li>
              <li>Ask for specific formatting when needed</li>
              <li>Request explanations for uncertain elements</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="content-module">
        <h3>Example Documents</h3>
        <p className="text-gray-600 mb-4">These examples showcase how various models handle transcription of different document types.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src="/cuny-ai/images/recipe.jpg" 
                alt="Pecan Butterballs Recipe Card" 
                className="w-full h-40 object-cover" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://raw.githubusercontent.com/zmuhls/cuny-ai/master/images/recipe.jpg";
                }}
              />
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Example 1</div>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-gray-900 mb-1">Handwritten Recipe Card</h4>
              <p className="text-sm text-gray-600 mb-2">Tests vision models on cursive handwriting and food recipe transcription.</p>
              <a href="/cuny-ai/pages/recipe.html" target="_blank" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
                View Comparison
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src="/cuny-ai/images/magician.jpg" 
                alt="The Magician Engraving" 
                className="w-full h-40 object-cover" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://raw.githubusercontent.com/zmuhls/cuny-ai/master/images/magician.jpg";
                }}
              />
              <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">Example 2</div>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-gray-900 mb-1">18th-Century Engraving</h4>
              <p className="text-sm text-gray-600 mb-2">Tests vision models on historical printed text and imagery analysis.</p>
              <a href="/cuny-ai/pages/magician.html" target="_blank" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
                View Comparison
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-module text-left">
        <h3>Analysis Guide</h3>
        <p className="text-gray-600 mb-3">As you review the examples, consider these comparison points:</p>
        
        <div className="bg-gray-50 p-4 rounded border border-gray-200 mt-2 ml-0 max-w-4xl">
          <ul className="list-none grid gap-3 sm:gap-2 grid-cols-1">
            <li className="border border-gray-100 rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono self-start">Accuracy</div>
                <span className="text-gray-700">Which models performed better with handwritten vs. printed text?</span>
              </div>
            </li>
            
            <li className="border border-gray-100 rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono self-start">Alt Text</div>
                <span className="text-gray-700">How descriptive and accurate were the generated image descriptions?</span>
              </div>
            </li>
            
            <li className="border border-gray-100 rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-mono self-start">Metadata</div>
                <span className="text-gray-700">How well did models identify and extract Dublin Core fields?</span>
              </div>
            </li>
            
            <li className="border border-gray-100 rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-mono self-start">Ambiguity</div>
                <span className="text-gray-700">How did models handle unclear parts of the images or text?</span>
              </div>
            </li>
            
            <li className="border border-gray-100 rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-mono self-start">Structure</div>
                <span className="text-gray-700">Did models present information in a clear, logical format?</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mt-4">
          <p className="text-sm text-blue-800">
            Comparing these outputs helps you choose the best model for specific tasks and understand the strengths and limitations of current vision-language technology.
          </p>
        </div>
      </div>
      
      {/* Footer with key terms */}
      <div className="mt-6 mb-4 border-t border-gray-200 pt-4">
        <KeyTermsFooter terms={['Vision Language Model', 'OCR', 'Document Understanding', 'Document Completion']} />
      </div>
    </div>
  );
};

export default ModelComparisonsStep;
