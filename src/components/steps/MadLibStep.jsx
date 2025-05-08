import React, { useState, useRef } from 'react';

const MadLibStep = () => {
  const [answersVisible, setAnswersVisible] = useState(false);
  const [inputs, setInputs] = useState({});
  const nextInputRef = useRef(0);
  
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
      nextInputRef.current += 1;
    } else {
      nextInputRef.current = 0;
    }
  };
  
  // Get border color based on input correctness
  const getBorderColor = (index) => {
    if (!answersVisible) return 'border-gray-200';
    
    const inputId = `input-${index}`;
    const userAnswer = inputs[inputId]?.trim().toLowerCase() || '';
    const correctAnswer = answers[inputId].toLowerCase();
    
    return userAnswer === correctAnswer ? 'border-green-400 bg-green-50' : 'border-red-300 bg-red-50';
  };

  // Render answer as floating text
  const renderAnswer = (index) => {
    if (!answersVisible) return null;
    
    return (
      <span className="absolute right-0 top-0 transform -translate-y-6 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded shadow-sm opacity-90">
        {answers[`input-${index}`]}
      </span>
    );
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
          <span className="text-sm text-blue-600">Fill in the blanks with AI terminology</span>
        </div>
      </div>
      
      <div className="content-module">
        <h3>Term Bank</h3>
        <p className="text-sm text-gray-500 mb-2">Click on terms to automatically fill them in the exercise below</p>
        <div className="flex flex-wrap gap-2">
          {['API', 'Batch Prompting', 'Model', 'Prompt', 'Training Data', 
            'Embeddings', 'System Message', 'Temperature', 'Top-p', 'Tokens'].map(term => (
            <code 
              key={term}
              className="bg-gray-50 px-2 py-1 rounded-full cursor-pointer hover:bg-blue-50 hover:text-blue-600 border border-gray-200 text-gray-600 text-xs font-medium transition-colors"
              onClick={() => handleTermClick(term)}
            >{term}</code>
          ))}
        </div>
      </div>

      <div className="content-module">
        <h3>Anatomy of a Prompt</h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <p className="mb-4 text-gray-700 leading-relaxed">
            A(n) <input 
              type="text" 
              value={inputs['input-0'] || ''} 
              onChange={(e) => handleInputChange(e, 0)} 
              className={`w-32 px-2 py-1 rounded text-sm border transition-colors ${getBorderColor(0)}`}
            />
            <span className="relative inline-block">
              {renderAnswer(0)}
            </span>
            begins with a 
            <input 
              type="text" 
              value={inputs['input-1'] || ''} 
              onChange={(e) => handleInputChange(e, 1)} 
              className={`w-32 px-2 py-1 rounded text-sm border transition-colors ${getBorderColor(1)}`}
            />
            <span className="relative inline-block">
              {renderAnswer(1)}
            </span>
            that tells the 
            <input 
              type="text" 
              value={inputs['input-2'] || ''} 
              onChange={(e) => handleInputChange(e, 2)} 
              className={`w-32 px-2 py-1 rounded text-sm border transition-colors ${getBorderColor(2)}`}
            />
            <span className="relative inline-block">
              {renderAnswer(2)}
            </span>
            which role to play.
          </p>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            By lowering 
            <input 
              type="text" 
              value={inputs['input-3'] || ''} 
              onChange={(e) => handleInputChange(e, 3)} 
              className={`w-32 px-2 py-1 rounded text-sm border transition-colors ${getBorderColor(3)}`}
            />
            <span className="relative inline-block">
              {renderAnswer(3)}
            </span>
            or 
            <input 
              type="text" 
              value={inputs['input-4'] || ''} 
              onChange={(e) => handleInputChange(e, 4)} 
              className={`w-32 px-2 py-1 rounded text-sm border transition-colors ${getBorderColor(4)}`}
            />
            <span className="relative inline-block">
              {renderAnswer(4)}
            </span>
            , you shrink the model's creative range.
          </p>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            Once authenticated with a secret key, the request travels through an 
            <input 
              type="text" 
              value={inputs['input-5'] || ''} 
              onChange={(e) => handleInputChange(e, 5)} 
              className={`w-32 px-2 py-1 rounded text-sm border transition-colors ${getBorderColor(5)}`}
            />
            <span className="relative inline-block">
              {renderAnswer(5)}
            </span>.
          </p>
          
          <p className="mb-4 text-gray-700 leading-relaxed">
            After slicing language from your prompt into 
            <input 
              type="text" 
              value={inputs['input-6'] || ''} 
              onChange={(e) => handleInputChange(e, 6)} 
              className={`w-32 px-2 py-1 rounded text-sm border transition-colors ${getBorderColor(6)}`}
            />
            <span className="relative inline-block">
              {renderAnswer(6)}
            </span>
            , the AI system consults its 
            <input 
              type="text" 
              value={inputs['input-7'] || ''} 
              onChange={(e) => handleInputChange(e, 7)} 
              className={`w-32 px-2 py-1 rounded text-sm border transition-colors ${getBorderColor(7)}`}
            />
            <span className="relative inline-block">
              {renderAnswer(7)}
            </span>
            to predict the next steps in the sequence based on mathematical vectors called 
            <input 
              type="text" 
              value={inputs['input-8'] || ''} 
              onChange={(e) => handleInputChange(e, 8)} 
              className={`w-32 px-2 py-1 rounded text-sm border transition-colors ${getBorderColor(8)}`}
            />
            <span className="relative inline-block">
              {renderAnswer(8)}
            </span>
            .
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Even so, gym class heroes like to speed things up with 
            <input 
              type="text" 
              value={inputs['input-9'] || ''} 
              onChange={(e) => handleInputChange(e, 9)} 
              className={`w-32 px-2 py-1 rounded text-sm border transition-colors ${getBorderColor(9)}`}
            />
            <span className="relative inline-block">
              {renderAnswer(9)}
            </span>
            .
          </p>
        </div>
        
        <button 
          onClick={toggleAnswers} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md"
        >
          {answersVisible ? 'Hide Answers' : 'Show Answers'}
        </button>
      </div>
    </div>
  );
};

export default MadLibStep;
