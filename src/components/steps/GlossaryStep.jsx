import React from 'react';

const GlossaryStep = () => {
  return (
    <div>
      <div className="content-module">
        <h3>AI-LLM Glossary</h3>
        <p className="text-gray-600">Key terms and concepts for understanding language model technology.</p>
      </div>
      
      <div className="content-module">
        <h3>Key Concepts</h3>
        <div className="space-y-3 mt-2">
          <div className="border-l-4 border-blue-400 pl-3 py-1" data-term="generative-ai" id="term-generative-ai">
            <h4 className="text-blue-800 font-medium flex items-center group">
              <a href="#term-generative-ai" className="flex items-center hover:text-blue-600">
                Generative AI
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-blue-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">A subset of artificial intelligence that processes natural language input to generate content (text, images, or music) based on patterns from training data.</p>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-3 py-1" data-term="large-language-model" id="term-large-language-model">
            <h4 className="text-blue-800 font-medium flex items-center group">
              <a href="#term-large-language-model" className="flex items-center hover:text-blue-600">
                Large Language Model (LLM)
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-blue-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">A transformer-based neural network with billions of parameters, trained on vast text corpora to predict and generate language.</p>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-3 py-1" data-term="vision-language-model" id="term-vision-language-model">
            <h4 className="text-blue-800 font-medium flex items-center group">
              <a href="#term-vision-language-model" className="flex items-center hover:text-blue-600">
                Vision Language Model (VLM)
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-blue-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">A model that processes and interprets visual data (images) to extract information, used for tasks involving both text and images.</p>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-3 py-1" data-term="training-data" id="term-training-data">
            <h4 className="text-blue-800 font-medium flex items-center group">
              <a href="#term-training-data" className="flex items-center hover:text-blue-600">
                Training Data
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-blue-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">Sprawling codex of text and/or image data whose statistical patterns guide the behavior of AI models trained on it.</p>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-3 py-1" data-term="token" id="term-token">
            <h4 className="text-blue-800 font-medium flex items-center group">
              <a href="#term-token" className="flex items-center hover:text-blue-600">
                Token
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-blue-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">A small unit of text (often a word or sub-word) that the model processes and predicts sequentially.</p>
          </div>
        </div>
      </div>
      
      <div className="content-module">
        <h3>Prompting Methods</h3>
        <div className="space-y-3 mt-2">
          <div className="border-l-4 border-purple-400 pl-3 py-1" data-term="prompt" id="term-prompt">
            <h4 className="text-purple-800 font-medium flex items-center group">
              <a href="#term-prompt" className="flex items-center hover:text-purple-600">
                Prompt
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-purple-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">The explicit instruction or input you provide to a language model to elicit a response.</p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-3 py-1" data-term="system-message" id="term-system-message">
            <h4 className="text-purple-800 font-medium flex items-center group">
              <a href="#term-system-message" className="flex items-center hover:text-purple-600">
                System Message
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-purple-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">A special instruction at the start of a conversation that sets persistent rules and behavior for the model, distinct from user prompts.</p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-3 py-1" data-term="temperature" id="term-temperature">
            <h4 className="text-purple-800 font-medium flex items-center group">
              <a href="#term-temperature" className="flex items-center hover:text-purple-600">
                Temperature
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-purple-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">A sampling parameter (0–2) that controls output randomness: lower values make responses more focused while higher values increase creativity.</p>
          </div>
          
          <div className="border-l-4 border-purple-400 pl-3 py-1" data-term="top-p" id="term-top-p">
            <h4 className="text-purple-800 font-medium flex items-center group">
              <a href="#term-top-p" className="flex items-center hover:text-purple-600">
                Top-p
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-purple-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">Helps decide which words (tokens) a model should consider when generating text, balancing common words and more varied options.</p>
          </div>
        </div>
      </div>
      
      <div className="content-module">
        <h3>Advanced Techniques</h3>
        <div className="space-y-3 mt-2">
          <div className="border-l-4 border-green-400 pl-3 py-1" data-term="document-completion" id="term-document-completion">
            <h4 className="text-green-800 font-medium flex items-center group">
              <a href="#term-document-completion" className="flex items-center hover:text-green-600">
                Document Completion
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-green-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">The task of auto-completing partial documents or filling in missing sections of text with contextually appropriate content, often using language models to ensure coherence with existing content.</p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-3 py-1" data-term="document-understanding" id="term-document-understanding">
            <h4 className="text-green-800 font-medium flex items-center group">
              <a href="#term-document-understanding" className="flex items-center hover:text-green-600">
                Document Understanding
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-green-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">The ability of AI systems to process, analyze, and extract meaningful information from documents, including contextual relationships, key points, and semantic content.</p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-3 py-1" data-term="prompt-engineering" id="term-prompt-engineering">
            <h4 className="text-green-800 font-medium flex items-center group">
              <a href="#term-prompt-engineering" className="flex items-center hover:text-green-600">
                Prompt Engineering
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-green-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">The systematic practice of designing, testing, and refining prompts to achieve specific outputs.</p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-3 py-1" data-term="fine-tuning" id="term-fine-tuning">
            <h4 className="text-green-800 font-medium flex items-center group">
              <a href="#term-fine-tuning" className="flex items-center hover:text-green-600">
                Fine-Tuning
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-green-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">Further training a pre-trained model on custom labeled data to specialize its behavior for particular tasks.</p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-3 py-1" data-term="batch-prompting" id="term-batch-prompting">
            <h4 className="text-green-800 font-medium flex items-center group">
              <a href="#term-batch-prompting" className="flex items-center hover:text-green-600">
                Batch Prompting
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-green-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">A method for submitting multiple prompt variations at once to compare outputs efficiently.</p>
          </div>
          
          <div className="border-l-4 border-green-400 pl-3 py-1" data-term="ocr" id="term-ocr">
            <h4 className="text-green-800 font-medium flex items-center group">
              <a href="#term-ocr" className="flex items-center hover:text-green-600">
                OCR (Optical Character Recognition)
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-green-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">Technology that converts different types of documents into editable and searchable text data.</p>
          </div>
        </div>
      </div>
      
      <div className="content-module">
        <h3>Infrastructure</h3>
        <div className="space-y-3 mt-2">
          <div className="border-l-4 border-amber-400 pl-3 py-1" data-term="api" id="term-api">
            <h4 className="text-amber-800 font-medium flex items-center group">
              <a href="#term-api" className="flex items-center hover:text-amber-600">
                API
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-amber-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">Application Programming Interface – protocols that allow different software to communicate, enabling interactions with AI models.</p>
          </div>
          
          <div className="border-l-4 border-amber-400 pl-3 py-1" data-term="api-key" id="term-api-key">
            <h4 className="text-amber-800 font-medium flex items-center group">
              <a href="#term-api-key" className="flex items-center hover:text-amber-600">
                API Key
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-amber-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">A unique code used to authenticate and authorize access to an API, ensuring secure and controlled usage.</p>
          </div>
          
          <div className="border-l-4 border-amber-400 pl-3 py-1" data-term="model-provider" id="term-model-provider">
            <h4 className="text-amber-800 font-medium flex items-center group">
              <a href="#term-model-provider" className="flex items-center hover:text-amber-600">
                Model Provider
                <span className="opacity-0 group-hover:opacity-100 ml-2 text-amber-400 text-xs transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </span>
              </a>
            </h4>
            <p className="text-sm text-gray-700">The organization or platform that hosts and provides access to a specific AI model via an API.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlossaryStep;
