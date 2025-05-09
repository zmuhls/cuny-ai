import React, { useState, useRef } from 'react';
import KeyTermsFooter from '../KeyTermsFooter';

// Custom input component for the MadLib exercise
const MadLibInput = ({ index, value, onChange, className, placeholder }) => {
  const minWidth = 120;
  const charWidth = 8;
  const width = Math.max(minWidth, placeholder.length * charWidth);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e, index)}
      className={`inline-block mx-2 my-1 ${className}`}
      style={{ width: `${width}px`, minWidth: `${minWidth}px` }}
      placeholder={placeholder}
    />
  );
};

const MadLibStep = () => {
  const [answersVisible, setAnswersVisible] = useState(false);
  const [inputs, setInputs] = useState({});
  const nextInputRef = useRef(0);
  const [usedTerms, setUsedTerms] = useState(new Set());

  // Updated answers for the new flow (10 terms)
  const answers = {
    'input-0': 'Prompt',
    'input-1': 'System Message',
    'input-2': 'Model',
    'input-3': 'Temperature',
    'input-4': 'API',
    'input-5': 'Key',
    'input-6': 'Tokens',
    'input-7': 'Training Data',
    'input-8': 'Embeddings',
    'input-9': 'Output'
  };

  // Term bank for learners (alphabetical for readability)
  const allTerms = [
    'API',
    'Key',
    'Embeddings',
    'Model',
    'Output',
    'Prompt',
    'System Message',
    'Temperature',
    'Tokens',
    'Training Data'
  ];

  /** Event Handlers **/
  const handleInputChange = (e, index) => {
    const newInputs = { ...inputs, [`input-${index}`]: e.target.value };
    setInputs(newInputs);
  };

  const toggleAnswers = () => setAnswersVisible(!answersVisible);

  const handleTermClick = (term) => {
    if (nextInputRef.current < Object.keys(answers).length) {
      const inputId = `input-${nextInputRef.current}`;
      const newInputs = { ...inputs, [inputId]: term };
      setInputs(newInputs);
      // record used term
      setUsedTerms(new Set([...usedTerms, term]));
      nextInputRef.current += 1;
    } else {
      nextInputRef.current = 0;
    }
  };

  const resetTermSelection = () => {
    setInputs({});
    setUsedTerms(new Set());
    nextInputRef.current = 0;
    setAnswersVisible(false);
  };

  /** Styling helpers **/
  const baseClasses =
    'px-3 py-2 rounded-md text-sm border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-sm';

  const getInputStyles = (index) => {
    const inputId = `input-${index}`;
    if (!answersVisible) {
      const isFilled = inputs[inputId] && inputs[inputId].trim() !== '';
      return `${baseClasses} ${isFilled ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-gray-50 hover:bg-white'}`;
    }
    const userAnswer = (inputs[inputId] || '').trim().toLowerCase();
    const correctAnswer = answers[inputId].toLowerCase();
    return userAnswer === correctAnswer
      ? `${baseClasses} border-green-400 bg-green-50 text-green-700`
      : `${baseClasses} border-red-300 bg-red-50 text-red-700`;
  };

  const getPlaceholder = (index) =>
    answersVisible ? answers[`input-${index}`] : `Term #${index + 1}`;

  // Footer key terms - explicitly set to match the Term Bank
  const keyTerms = [
    'API',
    'Key',
    'Embeddings',
    'Model',
    'Output',
    'Prompt',
    'System Message',
    'Temperature',
    'Tokens',
    'Training Data'
  ];

  return (
    <div>
      <div className="content-module">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Mad Lib: Fill in the Blank</h3>
        <p className="text-gray-600 max-w-xl">
          <em>A concise tour through the anatomy of a prompt.</em>
        </p>
      </div>

      {/* Term Bank */}
      <div className="content-module">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-blue-800 font-semibold text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              Term Bank
            </span>
            <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-md">
              {nextInputRef.current < Object.keys(answers).length
                ? `Next blank: #${nextInputRef.current + 1}`
                : 'All blanks filled'}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {allTerms.map((term) => {
              const isUsed = usedTerms.has(term);
              return (
                <code
                  key={term}
                  className={`px-3 py-1.5 rounded-md cursor-pointer border text-sm font-medium transition-all duration-200
                    ${isUsed
                      ? 'bg-gray-100 border-gray-200 text-gray-400 line-through opacity-60'
                      : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:scale-105 hover:shadow-sm active:scale-95'}`}
                  onClick={() => !isUsed && handleTermClick(term)}
                >
                  {term}
                </code>
              );
            })}
          </div>

          <p className="text-xs text-center text-blue-600 font-medium mt-3">
            Click terms to fill blanks in order.
          </p>
        </div>

        {/* Mad Lib content */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-6 mb-6">
          
          <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm space-y-6">
          {/* 1. Opening Directive */}
          <section className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-lg transition-all duration-300">
            <header className="flex items-center mb-3 pb-2 border-b border-gray-50">
              <span className="bg-blue-100 text-blue-600 p-1.5 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a1 1 0 000 2h10a1 1 0 100-2H5z" />
                </svg>
              </span>
              <h4 className="font-medium text-blue-700">Opening Directive</h4>
            </header>
            <p>Every exchange begins with a user‑authored <MadLibInput index={0} value={inputs['input-0'] || ''} onChange={handleInputChange} className={getInputStyles(0)} placeholder={getPlaceholder(0)} />.</p>
            <p className="mt-2">It frames the task that follows.</p>
          </section>

          {/* 2. Guardrails */}
          <section className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-lg transition-all duration-300">
            <header className="flex items-center mb-3 pb-2 border-b border-gray-50">
              <span className="bg-purple-100 text-purple-600 p-1.5 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                </svg>
              </span>
              <h4 className="font-medium text-purple-700">Guardrails</h4>
            </header>
            <p>A preceding <MadLibInput index={1} value={inputs['input-1'] || ''} onChange={handleInputChange} className={getInputStyles(1)} placeholder={getPlaceholder(1)} /> sets non‑negotiable rules that the <MadLibInput index={2} value={inputs['input-2'] || ''} onChange={handleInputChange} className={getInputStyles(2)} placeholder={getPlaceholder(2)} /> must follow.</p>
            <p className="mt-2">These instructions keep the conversation coherent and ethical.</p>
          </section>

          {/* 3. Temperature & API */}
          <section className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-lg transition-all duration-300">
            <header className="flex items-center mb-3 pb-2 border-b border-gray-50">
              <span className="bg-green-100 text-green-600 p-1.5 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                </svg>
              </span>
              <h4 className="font-medium text-green-700">Request Configuration</h4>
            </header>
            <p>By dialing <MadLibInput index={3} value={inputs['input-3'] || ''} onChange={handleInputChange} className={getInputStyles(3)} placeholder={getPlaceholder(3)} /> up or down, users modulate unpredictability before sending the request through an authenticated <MadLibInput index={4} value={inputs['input-4'] || ''} onChange={handleInputChange} className={getInputStyles(4)} placeholder={getPlaceholder(4)} /> using a unique <MadLibInput index={5} value={inputs['input-5'] || ''} onChange={handleInputChange} className={getInputStyles(5)} placeholder={getPlaceholder(5)} />.</p>
            <p className="mt-2">Security and style travel together in that handshake.</p>
          </section>

          {/* 4. Under the Hood */}
          <section className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-lg transition-all duration-300">
            <header className="flex items-center mb-3 pb-2 border-b border-gray-50">
              <span className="bg-yellow-100 text-yellow-600 p-1.5 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a1 1 0 00-2 0v12a1 1 0 102 0V4zm12 0a1 1 0 10-2 0v12a1 1 0 102 0V4z" />
                </svg>
              </span>
              <h4 className="font-medium text-yellow-700">Under the Hood</h4>
            </header>
            <p>The model converts language into mathematics:</p>
            <p className="my-2">It splits the prompt into <MadLibInput index={6} value={inputs['input-6'] || ''} onChange={handleInputChange} className={getInputStyles(6)} placeholder={getPlaceholder(6)} />, compares each one against patterns in its <MadLibInput index={7} value={inputs['input-7'] || ''} onChange={handleInputChange} className={getInputStyles(7)} placeholder={getPlaceholder(7)} />, and positions them within multidimensional <MadLibInput index={8} value={inputs['input-8'] || ''} onChange={handleInputChange} className={getInputStyles(8)} placeholder={getPlaceholder(8)} /> to measure semantic proximity.</p>
            <p className="mt-2">Those distances guide the next‑word prediction.</p>
          </section>

          {/* 5. Tangible Results */}
          <section className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-lg transition-all duration-300">
            <header className="flex items-center mb-3 pb-2 border-b border-gray-50">
              <span className="bg-red-100 text-red-600 p-1.5 rounded-full mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 2a1 1 0 00-1 1v2h2V3a1 1 0 00-1-1zM4 6a1 1 0 001 1h10a1 1 0 100-2H5a1 1 0 00-1 1zM2 10a2 2 0 012-2h12a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z" />
                </svg>
              </span>
              <h4 className="font-medium text-red-700">Tangible Results</h4>
            </header>
            <p>The conversation concludes with an <MadLibInput index={9} value={inputs['input-9'] || ''} onChange={handleInputChange} className={getInputStyles(9)} placeholder={getPlaceholder(9)} /> that learners review to judge quality and iterate further.</p>
            <p className="mt-2">Reflection on results fuels better future prompts.</p>
          </section>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            <button onClick={toggleAnswers} className="px-5 py-2.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md hover:-translate-y-0.5 active:translate-y-0">
              {answersVisible ? 'Hide Answers' : 'Show Answers'}
            </button>
            <button onClick={resetTermSelection} className="px-5 py-2.5 bg-gray-600 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 shadow-md hover:-translate-y-0.5 active:translate-y-0">
              Reset Exercise
            </button>
          </div>
        </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 mb-4 border-t border-gray-200 pt-4">
        <KeyTermsFooter terms={keyTerms} />
      </div>
    </div>
  );
};

export default MadLibStep;
