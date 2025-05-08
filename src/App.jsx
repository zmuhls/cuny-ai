import React, { useState } from 'react';
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
      keyTerms: ['Prompt', 'System Message', 'Model', 'Temperature', 'Tokens', 'Training Data', 'Computer Vision', 'Large Language Model']
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
      keyTerms: ['Document Completion', 'Document Understanding']
    },
    { 
      id: 'models', 
      title: 'Comparing Model Outputs',
      shortTitle: 'Compare',
      component: ModelComparisonsStep,
      keyTerms: []
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
  
  // State to track container height for dynamic sizing
  const [containerHeight, setContainerHeight] = useState('auto');
  
  // Navigation functions
  const goToStep = (index) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
    }
  };
  
  const goToNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };
  
  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <div className='bg-slate-100 py-8'>
      <div className='mx-auto max-w-5xl shadow-lg bg-white rounded-lg overflow-hidden'>
        <header className="bg-gray-800 text-white p-6">
          <h1 className='text-3xl font-bold'>AI Literacy Lab: Hands-On Prompting</h1>
          <p>A brief guide to language model prompting for academics and instructors | <a href="https://github.com/zmuhls/cuny-ai">GitHub Repo</a></p>
        </header>

        <div className="p-6 prose max-w-none prose-slate">
          
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
          
          {/* Ultra-compact Fixed Navigation Control */}
          <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 z-50">
            <div className="bg-white px-2 py-1 rounded-t-md shadow-md border border-gray-200 flex items-center space-x-1">
              {/* External Navigation Controls */}
              <NavigationControls 
                onPrevious={goToPreviousStep} 
                onNext={goToNextStep}
                hasPrevious={currentStepIndex > 0} 
                hasNext={currentStepIndex < steps.length - 1}
              />

              {/* Simplified Key Terms - Only show button that expands on click */}
              {currentStep.keyTerms.length > 0 && (
                <div className="relative group">
                  <button className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-800 font-medium py-1 px-2 rounded">
                    Key Terms
                  </button>
                  <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-white p-2 rounded shadow-lg border border-gray-200 w-64 z-50">
                    <KeyTermsFooter terms={currentStep.keyTerms} />
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
