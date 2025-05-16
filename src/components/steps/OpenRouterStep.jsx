import React, { useState } from 'react';
import KeyTermsFooter from '../KeyTermsFooter';

const OpenRouterStep = () => {
  const [apiVisible, setApiVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const togglePasswordField = () => {
    setShowPasswordField(!showPasswordField);
    setPasswordError(false);
    setPassword('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const verifyPassword = () => {
    if (password === 'tlc') {
      setApiVisible(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setApiVisible(false);
    }
  };

  const hideApiKey = () => {
    setApiVisible(false);
    setShowPasswordField(false);
    setPassword('');
    setPasswordError(false);
  };

  return (
    <div>
      <div className="content-module">
        <h3>OpenRouter API Guide</h3>
        <p className="text-gray-600 max-w-xl">
          <em>Explore LLM model providers using OpenRouter's unified API.</em>
        </p>
      </div>
      
      {/* First three steps */}
      <div className="content-module">
        <h3>Initial Setup</h3>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6 mb-6">
          
          <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
            <h5 className="font-medium text-blue-800 mb-3">Instructions</h5>
            <ol className="list-decimal list-outside ml-6 space-y-3 mb-4 text-gray-700">
              <li className="pb-2">Navigate to the <a href="https://web.chatboxai.app/" className="text-blue-600 hover:underline">Chatbox web portal</a></li>
              <li className="pb-2">Head to "Settings" in the lower left corner</li>
              <li className="pb-2">Click "Model Provider" then "Add Custom Provider"</li>
            </ol>

            {/* GIPHY GIF */}
            <div className="my-4 text-left">
              <img 
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZndkZXNrY3luOTBiMTdndHV2a3RtcW14Mzd4bTBkNms5ZjYwcnJoYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xl7gaJJjZgTOYGFIAw/giphy.gif" 
                alt="AI Animation" 
                className="w-full max-w-2xl h-auto rounded-md shadow-md"
                style={{ minHeight: "250px", maxHeight: "350px", objectFit: "contain", margin: "0" }}
                onLoad={() => setGifLoaded(true)}
                onError={(e) => {
                  console.error("GIF failed to load");
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Configuration steps */}
      <div className="content-module">
        <h3>Provider Configuration</h3>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6 mb-6">
          
          <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
            <h5 className="font-medium text-blue-800 mb-3">Instructions</h5>
            <ol className="list-decimal list-outside ml-6 space-y-3 mb-4 text-gray-700" start="4">
              <li className="pb-2"><strong>Add Name</strong>: OpenRouter</li>
              <li className="pb-2"><strong>Add API Host</strong>: https://openrouter.ai/api/v1/chat/completions</li>
              <li className="pb-2"><strong>Add API Key</strong>: 
                {!showPasswordField && !apiVisible && (
                  <span 
                    className="cursor-pointer text-blue-600 hover:underline ml-2" 
                    onClick={togglePasswordField}
                  >
                    Verify access
                  </span>
                )}
                
                {showPasswordField && !apiVisible && (
                  <div className="mt-2 flex flex-col">
                    <div className="flex items-center">
                      <input 
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter password"
                        className="border border-gray-300 rounded px-2 py-1 text-sm mr-2"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            verifyPassword();
                          }
                        }}
                      />
                      <button 
                        onClick={verifyPassword}
                        className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
                      >
                        Submit
                      </button>
                      <button 
                        onClick={togglePasswordField}
                        className="ml-2 text-gray-600 text-sm px-2 py-1 rounded hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                    </div>
                    {passwordError && (
                      <div className="text-red-600 text-sm mt-1">
                        Incorrect password. Please try again.
                      </div>
                    )}
                  </div>
                )}
                
                {apiVisible && (
                  <div className="mt-2">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                        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
                      </span>
                      <button 
                        onClick={hideApiKey}
                        className="ml-2 text-gray-600 text-sm px-2 py-1 rounded hover:bg-gray-100"
                      >
                        Hide
                      </button>
                    </div>
                  </div>
                )}
              </li>
              <li className="pb-2"><strong>Add Model</strong>: Choose or paste an ID (see below)</li>
              <li className="pb-2"><strong>Adjust Max Tokens in Context</strong>: Optional cap. Prevents runaway length and saves credits</li>
              <li className="pb-2"><strong>Adjust Temperature or Top-p</strong>: 0.2–1.0 sliders (lower values → crisp summaries; higher → creative drafts)</li>
              <li className="pb-2">Click <strong>Save</strong></li>
            </ol>

            {/* OpenRouter Image */}
            <div className="mt-4 text-left">
              <img 
                src="images/openrouter.png" 
                alt="OpenRouter Dashboard" 
                className="w-full max-w-2xl h-auto rounded-md shadow-md"
                style={{ minHeight: "250px", maxHeight: "350px", objectFit: "contain", margin: "0" }}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  console.error("Local image failed to load, trying remote");
                  e.target.onerror = null;
                  e.target.src = "https://raw.githubusercontent.com/zmuhls/cuny-ai/master/images/openrouter.png";
                  if (e.target.src.includes("username") || e.target.naturalWidth === 0) {
                    e.target.style.display = "none";
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-module text-left">
        <h3>Ready-to-Try Model IDs</h3>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6 mb-6">
          
          <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
            <ul className="list-none grid gap-3 sm:gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-y-3">
              <li className="border border-gray-100 rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono self-start">openai/gpt-4o</div>
                  <span className="text-gray-700">Flagship large language model from OpenAI</span>
                </div>
              </li>
              <li className="border border-gray-100 rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-mono self-start">anthropic/claude-3-sonnet</div>
                  <span className="text-gray-700">Flagship large language model from Anthropic</span>
                </div>
              </li>
              <li className="border border-gray-100 rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-mono self-start">google/gemini-pro-vision</div>
                  <span className="text-gray-700">Vision language model for images + text from Google</span>
                </div>
              </li>
              <li className="border border-gray-100 rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-mono self-start">mistralai/pixtral-large-2411</div>
                  <span className="text-gray-700">Vision model built on mistral-large-2411 from MistralAI</span>
                </div>
              </li>
              <li className="border border-gray-100 rounded-md p-3 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-mono self-start">mistralai/pixtral-12b</div>
                  <span className="text-gray-700">Fast, lightweight vision model from Mistral AI</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer with key terms */}
      <div className="mt-6 mb-4 border-t border-gray-200 pt-4">
        <KeyTermsFooter terms={['API', 'API Key', 'Model Provider', 'Temperature', 'Document Completion', 'Document Understanding']} />
      </div>
    </div>
  );
};

export default OpenRouterStep;
