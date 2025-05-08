import React, { useState } from 'react';

const OpenRouterStep = () => {
  const [apiVisible, setApiVisible] = useState(false);

  const toggleApiVisibility = () => {
    setApiVisible(!apiVisible);
  };

  return (
    <div>
      <div className="content-module">
        <h3>OpenRouter API Guide</h3>
        <p className="text-gray-600"><em>Scanning opens the provisioned OpenRouter chat.</em></p>
        <div className="flex items-center mt-2">
          <img 
            src="/cuny-ai/images/openrouter.png" 
            alt="OpenRouter" 
            className="h-8 w-auto mr-2" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://raw.githubusercontent.com/username/cuny-ai/main/images/openrouter.png";
              // Fallback to emoji if image fails
              if (e.target.src.includes("username") || e.target.naturalWidth === 0) {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "inline";
              }
            }}
          />
          <span className="text-3xl mr-2" role="img" aria-label="API" style={{display: "none"}}>🔌</span>
          <span className="text-sm text-gray-500">Connect multiple LLM providers with one API</span>
        </div>
      </div>
      
      <div className="content-module">
        <h3>API Provider Setup</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Navigate to the <a href="https://web.chatboxai.app/" className="text-blue-600 hover:underline">Chatbox web portal</a></li>
          <li>Head to "Settings" in the lower left corner</li>
          <li>Click "Model Provider" then "Add Custom Provider"</li>
          <li><strong>Add Name</strong>: OpenRouter</li>
          <li><strong>Add API Host</strong>: https://openrouter.ai/api/v1/chat/completions</li>
          <li><strong>Add API Key</strong>: 
            <span 
              className="cursor-pointer text-blue-600 hover:underline ml-2" 
              onClick={toggleApiVisibility}
            >
              {apiVisible ? "Hide API Key" : "Click to reveal API Key"}
            </span>
            {apiVisible && (
              <span className="ml-2 text-red-600">
                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
              </span>
            )}
          </li>
          <li><strong>Add Model</strong>: Choose or paste an ID (see below)</li>
          <li><strong>Adjust Max Tokens in Context</strong>: Optional cap. Prevents runaway length and saves credits</li>
          <li><strong>Adjust Temperature or Top-p</strong>: 0.2–1.0 sliders (lower values → crisp summaries; higher → creative drafts)</li>
          <li>Click <strong>Save</strong></li>
        </ol>
      </div>
      
      <div className="content-module">
        <h3>Ready-to-Try Model IDs</h3>
        <div className="bg-gray-50 p-3 rounded border border-gray-200 mt-2">
          <ul className="list-none space-y-2">
            <li className="flex items-center border-b border-gray-100 pb-2">
              <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono mr-2">openai/gpt-4o</div>
              <span className="text-gray-700">Flagship large language model from OpenAI</span>
            </li>
            <li className="flex items-center border-b border-gray-100 pb-2">
              <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-mono mr-2">anthropic/claude-3-sonnet</div>
              <span className="text-gray-700">Flagship large language model from Anthropic</span>
            </li>
            <li className="flex items-center border-b border-gray-100 pb-2">
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono mr-2">google/gemini-pro-vision</div>
              <span className="text-gray-700">Vision language model for images + text from Google</span>
            </li>
            <li className="flex items-center border-b border-gray-100 pb-2">
              <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-mono mr-2">mistralai/pixtral-large-2411</div>
              <span className="text-gray-700">Vision model built on mistral-large-2411 from MistralAI</span>
            </li>
            <li className="flex items-center">
              <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-mono mr-2">mistralai/pixtral-12b</div>
              <span className="text-gray-700">Fast, lightweight vision model from Mistral AI</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OpenRouterStep;
