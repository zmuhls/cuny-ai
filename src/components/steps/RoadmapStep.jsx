import React from 'react';

const RoadmapStep = () => {
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
        <p className="text-lg mb-4">This interactive station covers key concepts in large language model (LLM) prompting and introduces practical strategies for interacting with AI models, with a focus on document completion and transcription tasks.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AI Literacy</span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Prompt Engineering</span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Academic Workflows</span>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Document Processing</span>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Steps in the Sequence</h3>
        <p className="text-gray-600 mb-6">This roadmap provides an overview of the module's content and the skills you'll develop along the way.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg mr-4">
              1
            </div>
            <div>
              <h5 className="font-medium text-blue-800">Mad-Lib Warm-Up</h5>
              <p className="text-gray-600">A fun introduction to core terminology through an interactive fill-in-the-blank exercise.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg mr-4">
              2
            </div>
            <div>
              <h5 className="font-medium text-blue-800">OpenRouter API Guide</h5>
              <p className="text-gray-600">Learn how to interact with various AI models through a unified API.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg mr-4">
              3
            </div>
            <div>
              <h5 className="font-medium text-blue-800">Prompting Exercises</h5>
              <p className="text-gray-600">Hands-on tasks to practice prompting techniques with increasing complexity:</p>
              <ul className="list-disc list-inside mt-2 ml-2 space-y-1 text-gray-600">
              </ul>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg mr-4">
              4
            </div>
            <div>
              <h5 className="font-medium text-blue-800">Model Comparisons</h5>
              <p className="text-gray-600">Review output differences between models analyzing the same documents:</p>
              <ul className="list-disc list-inside mt-2 ml-2 space-y-1 text-gray-600">
              </ul>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg mr-4">
              5
            </div>
            <div>
              <h5 className="font-medium text-blue-800">AI-LLM Glossary</h5>
              <p className="text-gray-600">Glossary of key terms in generative AI, from technical concepts to practical applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapStep;
