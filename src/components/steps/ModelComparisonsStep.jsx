import React from 'react';
import KeyTermsFooter from '../KeyTermsFooter';

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
      
      <div className="content-module">
        <h3 className="text-center">Analysis Guide</h3>
        <p className="text-gray-600 mb-3 text-center">As you review the examples, consider these comparison points:</p>
        
        <div className="bg-gray-50 p-4 rounded border border-gray-200 mt-2 mx-auto max-w-4xl">
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
