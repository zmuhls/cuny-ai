import React from 'react';
import KeyTermsFooter from '../KeyTermsFooter';

const PromptingExercisesStep = () => {
  return (
    <div>
      <div className="content-module">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Exercise 1: System Message & Temperature Exercise</h3>
        <p className="text-gray-600 mb-5">Input a system message asking the model to complete a sentence based on your seed prompt and observe how different temperature settings affect responses.</p>
      </div>
      
      <div className="content-module bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6 mb-6">
        <div className="space-y-5">
          <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
            <h5 className="font-medium text-blue-800 mb-3">Instructions</h5>
            <ol className="list-decimal list-outside ml-6 space-y-3 mb-4 text-gray-700">
              <li className="pb-2">Input this system message (or create your own):
                <div className="bg-gray-50 border border-gray-200 rounded p-3 my-2 font-mono text-sm text-gray-800 whitespace-pre-wrap">You are an AI assistant that completes sentences thoughtfully. When given a starting sentence fragment, you will complete it with insight and originality.</div>
              </li>
              <li className="pb-2">Use this seed prompt (or create your own):
                <div className="bg-gray-50 border border-gray-200 rounded p-3 my-2 font-mono text-sm text-gray-800 whitespace-pre-wrap">Reading is important because...</div>
              </li>
              <li className="pb-2">Select a text generation model:
                <div className="flex flex-wrap gap-2 my-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono">openai/gpt-4-turbo</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-mono">anthropic/claude-3-opus</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono">google/gemini-1.5-pro</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-mono">mistralai/mistral-large</span>
                </div>
              </li>
              <li className="pb-2">Regenerate responses with different temperature settings:
                <div className="grid grid-cols-3 gap-2 my-2">
                  <div className="bg-blue-50 border border-blue-200 rounded-md p-2 text-center">
                    <div className="text-blue-800 font-mono text-xs mb-1">Low</div>
                    <div className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-xs font-bold">Temperature: 0.3</div>
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-md p-2 text-center">
                    <div className="text-indigo-800 font-mono text-xs mb-1">Medium</div>
                    <div className="bg-indigo-100 text-indigo-900 px-2 py-1 rounded text-xs font-bold">Temperature: 0.7</div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-md p-2 text-center">
                    <div className="text-purple-800 font-mono text-xs mb-1">High</div>
                    <div className="bg-purple-100 text-purple-900 px-2 py-1 rounded text-xs font-bold">Temperature: 1.1</div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="content-module">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
              <span className="text-sm font-medium text-indigo-700">Comparative Example</span>
            </div>
            <p className="text-sm text-indigo-800 mb-2">
              See real examples of how temperature affects responses to the same prompt:
            </p>
            <a 
              href="/cuny-ai/pages/temperature-comparison.html" 
              target="_blank" 
              className="inline-flex items-center bg-white border border-indigo-200 hover:bg-indigo-50 rounded-md px-3 py-2 text-indigo-600 text-sm font-medium transition shadow-sm hover:shadow"
              onError={(e) => {
                e.target.href = "https://raw.githubusercontent.com/zmuhls/cuny-ai/master/pages/temperature-comparison.html";
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              View Temperature Comparison
            </a>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-sm font-medium text-blue-700">Why Temperature Matters</span>
            </div>
            <p className="text-sm text-blue-800">
              Temperature controls randomness in model outputs. Lower values (0.1-0.4) produce consistent, deterministic responses, while higher values (0.7-1.2) introduce more creativity and variation with a higher risk of confabulation.
            </p>
          </div>
        </div>
        
        <figure className="w-full">
          <img 
            src="/cuny-ai/images/temperature.png" 
            alt="Comparison of output between temperature settings" 
            className="border rounded-lg shadow-sm my-2 max-w-full w-full"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://raw.githubusercontent.com/zmuhls/cuny-ai/master/images/temperature.png"; 
              // Fallback to GitHub raw content if local path fails
            }}
          />
          <figcaption className="text-sm text-gray-500 mt-1">
            <strong>Temperature comparison:</strong> Lower values produce more consistent, focused responses while higher values introduce more creativity and variation.
          </figcaption>
        </figure>
      </div>

      <div className="content-module mt-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Exercise 2: Exploratory Learning and Close Reading</h3>
        <p className="text-gray-600 mb-4">Engage in open-ended conversation with a chat model to explore ideas and analyze texts.</p>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6 mb-6">
          <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
            <h5 className="font-medium text-blue-800 mb-3">Instructions</h5>
            <ol className="list-decimal list-outside ml-6 space-y-3 mb-4 text-gray-700">
              <li className="pb-2">Choose a topic or text you'd like to explore in depth</li>
              <li className="pb-2">Select a chat model to engage with:
                <div className="flex flex-wrap gap-2 my-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono">openai/gpt-4-turbo</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-mono">anthropic/claude-3-opus</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono">google/gemini-1.5-pro</span>
                </div>
              </li>
              <li className="pb-2">Begin with an open-ended question or prompt about your topic</li>
              <li className="pb-2">Continue the conversation by:
                <ul className="list-disc list-inside pl-5 mt-1 space-y-3 text-gray-700">
                  <li className="pb-2">Asking for elaboration on specific points</li>
                  <li className="pb-2">Requesting different perspectives or interpretations</li>
                  <li className="pb-2">Challenging assumptions or conclusions</li>
                  <li className="pb-2">Asking for textual evidence or examples</li>
                </ul>
              </li>
              <li className="pb-2">Export your conversation for annotation and analysis</li>
            </ol>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-indigo-900 font-bold text-lg mb-2">Example Methodology</h4>
              <p className="text-indigo-700 mb-4">
                For a detailed demonstration of this exploratory learning approach, see Ian Williams' document on close-reading techniques with chat models:
              </p>
              
              <a 
                href="https://docs.google.com/document/d/1OPYzKLOYXwqvEG8cl6mX3h2meXxZyDntgxGWOqkxFfQ/edit?tab=t.0#heading=h.z6j6sfaqvrn7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block bg-gradient-to-r from-white to-indigo-50 border-2 border-indigo-200 hover:border-indigo-400 rounded-lg p-4 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Google Document</div>
                      <div className="font-bold text-lg text-indigo-700 group-hover:text-indigo-800">Close-Reading with Chat Models</div>
                      <div className="text-xs text-indigo-500 mt-1 font-medium">by Ian Williams</div>
                    </div>
                  </div>
                  <div className="bg-indigo-100 p-2 rounded-full text-indigo-600 group-hover:bg-indigo-200 group-hover:translate-x-1 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-100 rounded-lg p-3 mb-4">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm font-medium text-green-700">Benefits of this Approach</span>
          </div>
          <ul className="text-sm text-green-800 space-y-2 list-disc list-inside">
            <li>Encourages critical thinking about model responses</li>
            <li>Helps identify model strengths, limitations, and biases</li>
            <li>Builds skills in formulating effective follow-up questions</li>
            <li>Creates a record of your learning process for reflection</li>
          </ul>
        </div>
      </div>
      
      {/* Footer with key terms */}
      <div className="mt-6 mb-4 border-t border-gray-200 pt-4">
        <KeyTermsFooter terms={['Document Completion', 'Temperature', 'Prompt', 'Batch Prompting']} />
      </div>
    </div>
  );
};

export default PromptingExercisesStep;
