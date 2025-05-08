import React, { useState, useRef } from 'react';

const MadLibStep = () => {
  const [answersVisible, setAnswersVisible] = useState(false);
  const [inputs, setInputs] = useState({});
  const nextInputRef = useRef(0);
  const [usedTerms, setUsedTerms] = useState(new Set());
  
  // The expected answers for each input
  const answers = {
    'input-0': 'Prompt',
    'input-1': 'System Message',
    'input-2': 'Model',
    'input-3': 'Temperature',
    'input-4': 'Top-p',
    'input-5': 'API',
    'input-6': 'Tokens',
    'input-7': 'Training Data',
    'input-8': 'Embeddings',
    'input-9': 'Batch Prompting'
  };
  
  // All available terms
  const allTerms = ['API', 'Batch Prompting', 'Model', 'Prompt', 'Training Data', 'Embeddings', 'System Message', 'Temperature', 'Top-p', 'Tokens'];
  
  // Handle input changes
  const handleInputChange = (e, index) => {
    const newInputs = { ...inputs };
    newInputs[`input-${index}`] = e.target.value;
    setInputs(newInputs);
  };
  
  // Toggle answers visibility
  const toggleAnswers = () => {
    setAnswersVisible(!answersVisible);
  };
  
  // Handle term click from the term bank
  const handleTermClick = (term) => {
    if (nextInputRef.current < Object.keys(answers).length) {
      const inputId = `input-${nextInputRef.current}`;
      const newInputs = { ...inputs };
      newInputs[inputId] = term;
      setInputs(newInputs);
      
      // Mark term as used
      const newUsedTerms = new Set(usedTerms);
      newUsedTerms.add(term);
      setUsedTerms(newUsedTerms);
      
      nextInputRef.current += 1;
    } else {
      nextInputRef.current = 0;
    }
  };
  
  // Reset all inputs and term selection counter
  const resetTermSelection = () => {
    setInputs({});
    setUsedTerms(new Set());
    nextInputRef.current = 0;
    // Force component re-render
    setAnswersVisible(false);
  };
  
  // Get input styling based on correctness and focus state
  const getInputStyles = (index) => {
    const baseClasses = "px-3 py-2 rounded-md text-sm border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-sm";
    
    if (!answersVisible) {
      const inputId = `input-${index}`;
      const isFilled = inputs[inputId] && inputs[inputId].trim() !== '';
      return `${baseClasses} ${isFilled ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-gray-50 hover:bg-white'}`;
    }
    
    const inputId = `input-${index}`;
    const userAnswer = inputs[inputId]?.trim().toLowerCase() || '';
    const correctAnswer = answers[inputId].toLowerCase();
    
    return userAnswer === correctAnswer 
      ? `${baseClasses} border-green-400 bg-green-50 text-green-700` 
      : `${baseClasses} border-red-300 bg-red-50 text-red-700`;
  };

  // Get width for input field based on expected answer
  const getInputWidth = (index) => {
    const answer = answers[`input-${index}`];
    // Base width is at least 120px, add 8px per character over 10 chars
    const width = Math.max(120, 120 + (answer.length > 10 ? (answer.length - 10) * 8 : 0));
    return { width: `${width}px` };
  };

  // Get dynamic placeholder text based on whether answers are visible
  const getPlaceholder = (index) => {
    if (answersVisible) {
      return answers[`input-${index}`]; // Show correct answer as placeholder
    }
    return `Term #${index + 1}`; // Show generic placeholder when not revealed
  };

  return (
    <div>
      <div className="content-module">
        <h3>Mad-Lib Warm-Up</h3>
        <p className="text-gray-600">A short, playful tour of language-model concepts that you can reuse in research workflows.</p>
        <div className="flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-blue-600 font-medium">Fill in the blanks with AI terminology</span>
        </div>
      </div>
      
      <div className="content-module">
        <h3>Anatomy of a Prompt</h3>
        
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm">
          {/* Term Bank moved to top */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                <span className="text-blue-800 font-semibold text-sm">Available Terms</span>
              </div>
              <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-md">
                {nextInputRef.current < Object.keys(answers).length 
                  ? `Next blank: #${nextInputRef.current + 1}`
                  : "All blanks filled"}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {allTerms.map(term => {
                const isUsed = usedTerms.has(term);
                const isCorrectAnswer = Object.values(answers).some(answer => 
                  answer.toLowerCase() === term.toLowerCase()
                );
                
                return (
                  <code 
                    key={term}
                    className={`px-3 py-1.5 rounded-md cursor-pointer border text-sm font-medium transition-all duration-200
                      ${isUsed 
                        ? 'bg-gray-100 border-gray-200 text-gray-400 line-through opacity-60' 
                        : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:scale-105 hover:shadow-sm active:scale-95'
                      }
                      ${isCorrectAnswer && answersVisible ? 'bg-green-50 border-green-200 text-green-700' : ''}`}
                    onClick={() => !isUsed && handleTermClick(term)}
                  >
                    {term}
                  </code>
                );
              })}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-5">
            <div className="mb-8 text-gray-700 leading-loose space-y-6 sm:space-y-8 font-serif">
              <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-y-2">
                <span>A(n)</span>
                <span className="relative block w-full sm:w-auto sm:mx-2 my-1 sm:my-0">
                  <input 
                    type="text" 
                    value={inputs['input-0'] || ''} 
                    onChange={(e) => handleInputChange(e, 0)} 
                    className={`w-full sm:w-auto ${getInputStyles(0)}`}
                    style={getInputWidth(0)}
                    placeholder={getPlaceholder(0)}
                  />
                </span>
                <span>begins with a</span>
                <span className="relative block w-full sm:w-auto sm:mx-2 my-1 sm:my-0">
                  <input 
                    type="text" 
                    value={inputs['input-1'] || ''} 
                    onChange={(e) => handleInputChange(e, 1)} 
                    className={`w-full sm:w-auto ${getInputStyles(1)}`}
                    style={getInputWidth(1)}
                    placeholder={getPlaceholder(1)}
                  />
                </span>
                <span>that tells the</span>
                <span className="relative block w-full sm:w-auto sm:mx-2 my-1 sm:my-0">
                  <input 
                    type="text" 
                    value={inputs['input-2'] || ''} 
                    onChange={(e) => handleInputChange(e, 2)} 
                    className={`w-full sm:w-auto ${getInputStyles(2)}`}
                    style={getInputWidth(2)}
                    placeholder={getPlaceholder(2)}
                  />
                </span>
                <span>which role to play.</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-y-2">
                <span>By lowering</span>
                <span className="relative block w-full sm:w-auto sm:mx-2 my-1 sm:my-0">
                  <input 
                    type="text" 
                    value={inputs['input-3'] || ''} 
                    onChange={(e) => handleInputChange(e, 3)} 
                    className={`w-full sm:w-auto ${getInputStyles(3)}`}
                    style={getInputWidth(3)}
                    placeholder={getPlaceholder(3)}
                  />
                </span>
                <span>or</span>
                <span className="relative block w-full sm:w-auto sm:mx-2 my-1 sm:my-0">
                  <input 
                    type="text" 
                    value={inputs['input-4'] || ''} 
                    onChange={(e) => handleInputChange(e, 4)} 
                    className={`w-full sm:w-auto ${getInputStyles(4)}`}
                    style={getInputWidth(4)}
                    placeholder={getPlaceholder(4)}
                  />
                </span>
                <span>, you shrink the model's creative range.</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-y-2">
                <span>Once authenticated with a secret key, the request travels through an</span>
                <span className="relative block w-full sm:w-auto sm:mx-2 my-1 sm:my-0">
                  <input 
                    type="text" 
                    value={inputs['input-5'] || ''} 
                    onChange={(e) => handleInputChange(e, 5)} 
                    className={`w-full sm:w-auto ${getInputStyles(5)}`}
                    style={getInputWidth(5)}
                    placeholder={getPlaceholder(5)}
                  />
                </span>
                <span>.</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-y-2">
                <span>After slicing language from your prompt into</span>
                <span className="relative block w-full sm:w-auto sm:mx-2 my-1 sm:my-0">
                  <input 
                    type="text" 
                    value={inputs['input-6'] || ''} 
                    onChange={(e) => handleInputChange(e, 6)} 
                    className={`w-full sm:w-auto ${getInputStyles(6)}`}
                    style={getInputWidth(6)}
                    placeholder={getPlaceholder(6)}
                  />
                </span>
                <span>, the AI system consults its</span>
                <span className="relative block w-full sm:w-auto sm:mx-2 my-1 sm:my-0">
                  <input 
                    type="text" 
                    value={inputs['input-7'] || ''} 
                    onChange={(e) => handleInputChange(e, 7)} 
                    className={`w-full sm:w-auto ${getInputStyles(7)}`}
                    style={getInputWidth(7)}
                    placeholder={getPlaceholder(7)}
                  />
                </span>
                <span>to predict the next steps in the sequence based on mathematical vectors called</span>
                <span className="relative block w-full sm:w-auto sm:mx-2 my-1 sm:my-0">
                  <input 
                    type="text" 
                    value={inputs['input-8'] || ''} 
                    onChange={(e) => handleInputChange(e, 8)} 
                    className={`w-full sm:w-auto ${getInputStyles(8)}`}
                    style={getInputWidth(8)}
                    placeholder={getPlaceholder(8)}
                  />
                </span>
                <span>.</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-y-2">
                <span>Even so, gym class heroes like to speed things up with</span>
                <span className="relative block w-full sm:w-auto sm:mx-2 my-1 sm:my-0">
                  <input 
                    type="text" 
                    value={inputs['input-9'] || ''} 
                    onChange={(e) => handleInputChange(e, 9)} 
                    className={`w-full sm:w-auto ${getInputStyles(9)}`}
                    style={getInputWidth(9)}
                    placeholder={getPlaceholder(9)}
                  />
                </span>
                <span>.</span>
              </div>
            </div>
          
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              <button 
                onClick={toggleAnswers} 
                className="px-5 py-2.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                {answersVisible ? 'Hide Answers' : 'Show Answers'}
              </button>
              
              <button 
                onClick={resetTermSelection}
                className="px-5 py-2.5 bg-gray-600 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                Reset Exercise
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadLibStep;
