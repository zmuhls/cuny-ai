import React from 'react';

const RoadmapStep = () => {
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Module Roadmap</h3>
        <p className="text-gray-600 mb-6">This roadmap provides an overview of the module's content and the skills you'll develop along the way.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h4 className="text-lg font-medium text-gray-800 mb-4">Module Curriculum</h4>
        
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg mr-4">
              1
            </div>
            <div>
              <h5 className="font-medium text-blue-800">Mad-Lib Warm-Up</h5>
              <p className="text-gray-600">A fun introduction to core terminology through an interactive fill-in-the-blank exercise. This helps you become familiar with essential AI concepts.</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg mr-4">
              2
            </div>
            <div>
              <h5 className="font-medium text-blue-800">OpenRouter API Guide</h5>
              <p className="text-gray-600">Setting up your environment to interact with various AI models through a unified API. Learn how to authenticate and structure API requests.</p>
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
                <li>Task 1: Document Completion - Learn to craft prompts that complete partial documents</li>
                <li>Task 2: Document Understanding - Use vision models to extract information from images</li>
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
                <li>Example 1: Handwritten recipe card - See how different models handle handwriting</li>
                <li>Example 2: Engraved image and poem - Compare vision-language capabilities</li>
              </ul>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg mr-4">
              5
            </div>
            <div>
              <h5 className="font-medium text-blue-800">AI-LLM Glossary</h5>
              <p className="text-gray-600">Comprehensive reference of key terms for understanding LLMs, including technical concepts, model architectures, and practical applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapStep;
