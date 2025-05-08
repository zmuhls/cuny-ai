import React from 'react';

const ModelComparisonsStep = () => {
  return (
    <div>
      <div className="content-module">
        <h3>Comparing Model Outputs</h3>
        <p className="text-gray-600">See how different vision models analyze the same documents and compare their outputs.</p>
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
                  e.target.src = "https://raw.githubusercontent.com/username/cuny-ai/main/images/recipe.jpg";
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
                  e.target.src = "https://raw.githubusercontent.com/username/cuny-ai/main/images/magician.jpg";
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
      
      <div className="content-module">
        <h3>Analysis Guide</h3>
        <p className="text-gray-600 mb-3">As you review the examples, consider these comparison points:</p>
        
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mt-1 mr-3">Accuracy</div>
            <p className="text-sm text-gray-700">Which models performed better with handwritten vs. printed text?</p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mt-1 mr-3">Alt Text</div>
            <p className="text-sm text-gray-700">How descriptive and accurate were the generated image descriptions?</p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs mt-1 mr-3">Metadata</div>
            <p className="text-sm text-gray-700">How well did models identify and extract Dublin Core fields?</p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs mt-1 mr-3">Ambiguity</div>
            <p className="text-sm text-gray-700">How did models handle unclear parts of the images or text?</p>
          </div>
          
          <div className="flex items-start">
            <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs mt-1 mr-3">Structure</div>
            <p className="text-sm text-gray-700">Did models present information in a clear, logical format?</p>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mt-4">
          <p className="text-sm text-blue-800">
            Comparing these outputs helps you choose the best model for specific tasks and understand the strengths and limitations of current vision-language technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelComparisonsStep;
