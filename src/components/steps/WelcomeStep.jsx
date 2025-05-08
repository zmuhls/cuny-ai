import React from 'react';

const WelcomeStep = () => {
  return (
    <div>
      {/* Main Home Welcome Banner */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="h-16 w-16 mr-4 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-full w-full">
              <rect width="100" height="100" rx="15" fill="#1E40AF" />
              <circle cx="25" cy="25" r="8" fill="#ffffff" opacity="0.9" />
              <circle cx="75" cy="30" r="6" fill="#ffffff" opacity="0.9" />
              <circle cx="65" cy="70" r="7" fill="#ffffff" opacity="0.9" />
              <circle cx="30" cy="65" r="5" fill="#ffffff" opacity="0.9" />
              <circle cx="50" cy="45" r="9" fill="#ffffff" opacity="0.9" />
              <line x1="25" y1="25" x2="50" y2="45" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
              <line x1="75" y1="30" x2="50" y2="45" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
              <line x1="65" y1="70" x2="50" y2="45" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
              <line x1="30" y1="65" x2="50" y2="45" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
              <line x1="30" y1="65" x2="65" y2="70" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
              <line x1="25" y1="25" x2="75" y2="30" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-blue-800 mt-0">AI Literacy Lab</h1>
        </div>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Hands-On Prompting for Academic Workflows</h2>
        <p className="text-lg mb-4">This interactive module covers key concepts in large language model (LLM) prompting and introduces practical strategies for interacting with AI models, with a focus on document completion and transcription tasks.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AI Literacy</span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Prompt Engineering</span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Academic Workflows</span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Document Processing</span>
        </div>
      </div>
      
      {/* What You'll Learn Section */}
      <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">What You'll Learn</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">1</span>
            </div>
            <div>
              <h4 className="font-medium">Core AI Terminology</h4>
              <p className="text-gray-600">Understand essential concepts like tokens, temperature, and model capabilities</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">2</span>
            </div>
            <div>
              <h4 className="font-medium">Prompt Engineering</h4>
              <p className="text-gray-600">Learn techniques to craft effective prompts for different tasks</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">3</span>
            </div>
            <div>
              <h4 className="font-medium">Model Selection</h4>
              <p className="text-gray-600">Compare different models and their strengths for specific use cases</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">4</span>
            </div>
            <div>
              <h4 className="font-medium">Practical Document Tasks</h4>
              <p className="text-gray-600">Apply AI to real academic document processing workflows</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Module Roadmap */}
      <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Module Roadmap</h3>
        <ul className="list-disc list-inside space-y-3 mb-4">
          <li className="pl-1">
            <strong className="text-blue-800">Mad-Lib Warm-Up:</strong> 
            <p className="ml-6 text-gray-700">A fun introduction to core terminology through an interactive fill-in-the-blank exercise.</p>
          </li>
          <li className="pl-1">
            <strong className="text-blue-800">OpenRouter Guide:</strong>
            <p className="ml-6 text-gray-700">Setting up your environment to interact with various AI models through a unified API.</p>
          </li>
          <li className="pl-1">
            <strong className="text-blue-800">Prompting Exercises:</strong>
            <p className="ml-6 text-gray-700">Hands-on tasks to practice prompting techniques with increasing complexity.</p>
            <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
              <li><span className="text-gray-700">Task 1: Document Completion</span></li>
              <li><span className="text-gray-700">Task 2: Document Understanding (using vision models)</span></li>
            </ul>
          </li>
          <li className="pl-1">
            <strong className="text-blue-800">Model Comparisons:</strong>
            <p className="ml-6 text-gray-700">Review output differences between models analyzing the same documents.</p>
            <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
              <li><span className="text-gray-700">Example 1: Handwritten recipe card</span></li>
              <li><span className="text-gray-700">Example 2: Engraved image and poem</span></li>
            </ul>
          </li>
          <li className="pl-1">
            <strong className="text-blue-800">AI-LLM Glossary:</strong>
            <p className="ml-6 text-gray-700">Comprehensive reference of key terms for understanding LLMs.</p>
          </li>
        </ul>
        
        <div className="mt-6 text-center">
          <p className="text-lg font-medium text-blue-700 mb-2">Ready to begin?</p>
          <p className="text-gray-600">Click "Next" below to start with the Mad-Lib exercise!</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeStep;
