import React, { useState, useRef, useEffect } from 'react';
import KeyTermsFooter from './components/KeyTermsFooter';
import NavigationControls from './components/NavigationControls';
import StepIndicator from './components/StepIndicator';

// Step components
import RoadmapStep from './components/steps/RoadmapStep';
import MadLibStep from './components/steps/MadLibStep';
import OpenRouterStep from './components/steps/OpenRouterStep';
import PromptingExercisesStep from './components/steps/PromptingExercisesStep';
import ModelComparisonsStep from './components/steps/ModelComparisonsStep';
import GlossaryStep from './components/steps/GlossaryStep';

const App = () => {
  // Define the sequence steps with shorter titles for the menu
  const steps = [
    { 
      id: 'roadmap', 
      title: 'Module Roadmap',
      shortTitle: 'Roadmap',
      component: RoadmapStep,
      keyTerms: []
    },
    { 
      id: 'madlib', 
      title: 'Mad-Lib Warm-Up',
      shortTitle: 'Mad-Lib',
      component: MadLibStep,
      keyTerms: ['API', 'Key', 'Embeddings', 'Model', 'Output', 'Prompt', 'System Message', 'Temperature', 'Tokens', 'Training Data']
    },
    { 
      id: 'openrouter', 
      title: 'OpenRouter API Guide',
      shortTitle: 'API Guide',
      component: OpenRouterStep,
      keyTerms: ['API', 'API Key', 'Model Provider', 'Vision Language Model']
    },
    { 
      id: 'prompting', 
      title: 'Prompting Exercises',
      shortTitle: 'Exercises',
      component: PromptingExercisesStep,
      keyTerms: ['Document Completion', 'Temperature', 'Prompt', 'Batch Prompting']
    },
    { 
      id: 'models', 
      title: 'Comparing Model Outputs',
      shortTitle: 'Compare',
      component: ModelComparisonsStep,
      keyTerms: ['Large Language Model', 'Vision Language Model', 'OCR', 'Document Understanding', 'Document Completion']
    },
    { 
      id: 'glossary', 
      title: 'AI-LLM Glossary',
      shortTitle: 'Glossary',
      component: GlossaryStep,
      keyTerms: []
    }
  ];

  // State for tracking current step
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = steps[currentStepIndex];
  
  // State for UI controls
  const [containerHeight, setContainerHeight] = useState('auto');
  const [keyTermsVisible, setKeyTermsVisible] = useState(false);
  const keyTermsRef = useRef(null);
  
  // Navigation functions - expose to window for KeyTermsFooter
  const goToStep = (index) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
      // Scroll to top after changing step
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100); // Small delay to ensure component change occurs first
    }
  };
  
  // Handle clicks outside of key terms dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (keyTermsRef.current && !keyTermsRef.current.contains(event.target)) {
        setKeyTermsVisible(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setKeyTermsVisible(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);
  
  // Expose goToStep to window for use in KeyTermsFooter
  useEffect(() => {
    window.goToStep = goToStep;
    
    // Event listener for custom navigation events
    const handleNavigateEvent = (event) => {
      const { stepIndex, termToHighlight } = event.detail;
      goToStep(stepIndex);
      
      // If we have a term to highlight, scroll to it and highlight it
      if (termToHighlight) {
        setTimeout(() => {
          console.log(`App looking for term: ${termToHighlight}`);
          const termElement = document.querySelector(`[data-term="${termToHighlight}"]`);
          console.log("App found term element:", termElement);
          
          if (termElement) {
            termElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add highlight effect
            termElement.classList.add('term-highlight');
            // Remove highlight after 3 seconds
            setTimeout(() => {
              termElement.classList.remove('term-highlight');
            }, 3000);
          }
        }, 500); // Delay to ensure the glossary is rendered
      }
    };
    
    document.addEventListener('navigateToStep', handleNavigateEvent);
    
    // Cleanup
    return () => {
      delete window.goToStep;
      document.removeEventListener('navigateToStep', handleNavigateEvent);
    };
  }, []);
  
  const goToNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      // Scroll to top after changing step
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100); // Small delay to ensure component change occurs first
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      // Scroll to top after changing step
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100); // Small delay to ensure component change occurs first
    }
  };

  return (
    <div className='bg-slate-100 py-4 sm:py-8'>
      <div className='mx-auto w-full max-w-5xl shadow-lg bg-white rounded-lg overflow-hidden'>
        <header className="bg-gray-800 text-white p-3 sm:p-6">
          <h1 className='text-xl sm:text-3xl font-bold'>AI Prompting in Praxis</h1>
          <p className="text-sm sm:text-base mt-1">
            A brief guide to language model prompting for academics and instructors 
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline mt-1 sm:mt-0">
              <a href="https://github.com/zmuhls/cuny-ai" className="text-blue-300 hover:text-blue-100">GitHub Repo</a>
            </span>
          </p>
        </header>

        <div className="p-3 sm:p-6 prose max-w-none prose-slate">
          
          {/* Enhanced Step Indicator with navigation */}
          <StepIndicator 
            currentStep={currentStepIndex}
            totalSteps={steps.length}
            steps={steps}
            onNavigate={(index) => goToStep(index)}
          />

          {/* Current Step Content - All steps rendered side by side with horizontal transitions */}
          <div className="phase-sequence mb-8">
            <div 
              className="phase-content flex"
              style={{ 
                transform: `translateX(-${currentStepIndex * 100}%)`,
                minHeight: containerHeight
              }}
            >
              {steps.map((step, index) => {
                const StepComp = step.component;
                return (
                  <div key={step.id} className="flex-shrink-0 w-full phase-slide">
                    <div className="step-container">
                      <StepComp />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content spacing to ensure room for fixed navigation */}
          <div className="pb-40"></div>
          
          {/* Ultra-compact Fixed Navigation Control - Enhanced for mobile */}
          <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 z-50 w-full sm:w-auto">
            <div className="bg-white px-2 py-2 rounded-t-md shadow-md border border-gray-200 flex items-center justify-center sm:justify-start space-x-2 w-full sm:w-auto max-w-md mx-auto">
              {/* External Navigation Controls */}
              <NavigationControls 
                onPrevious={goToPreviousStep} 
                onNext={goToNextStep}
                hasPrevious={currentStepIndex > 0} 
                hasNext={currentStepIndex < steps.length - 1}
              />

              {/* Improved Key Terms - Clickable dropdown that works on mobile */}
              {currentStep.keyTerms.length > 0 && (
                <div className="relative" ref={keyTermsRef}>
                  <button 
                    className={`text-xs flex items-center ${keyTermsVisible ? 'bg-blue-100 text-blue-800' : 'bg-blue-50 hover:bg-blue-100 text-blue-800'} font-medium py-1 px-2 rounded transition-colors duration-200`}
                    onClick={() => setKeyTermsVisible(!keyTermsVisible)}
                    aria-expanded={keyTermsVisible}
                    aria-haspopup="true"
                  >
                    Key Terms
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 ml-1 transform transition-transform ${keyTermsVisible ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown content with animation */}
                  <div 
                    className={`
                      absolute bottom-full right-0 mb-2 
                      bg-white p-3 rounded shadow-lg border border-gray-200 
                      w-72 sm:w-80 max-w-[90vw] z-50
                      transform origin-bottom-right transition-all duration-200 ease-in-out
                      ${keyTermsVisible 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}
                    `}
                  >
                    <div className="max-h-[40vh] overflow-y-auto">
                      <KeyTermsFooter terms={currentStep.keyTerms} />
                    </div>
                    <div className="absolute h-3 w-3 bg-white transform rotate-45 right-4 -bottom-1.5 border-r border-b border-gray-200"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
