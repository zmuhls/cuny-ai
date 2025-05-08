import React from 'react';

const StepIndicator = ({ currentStep, totalSteps, steps, onNavigate }) => {
  const progressPercentage = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="step-indicator mb-4 sm:mb-8 bg-gray-50 p-2 sm:p-4 rounded-lg border border-gray-200 shadow-sm">
      {/* Progress Bar */}
      <div className="progress-bar h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden mb-2 sm:mb-4">
        <div 
          className="progress-fill h-full bg-blue-600 transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      {/* Step Buttons */}
      <div className="flex justify-between relative">
        {/* Connection lines between steps */}
        <div className="absolute top-4 sm:top-5 left-0 right-0 h-0.5 bg-gray-200" style={{ zIndex: 0 }}></div>
        
        {steps.map((step, index) => {
          // Determine if the step is active, completed, or upcoming
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isClickable = true; // Allow navigation to any step
          
          // Determine classes based on state
          const bubbleClasses = `
            step-bubble w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center 
            transition-all duration-300 ease-in-out text-xs sm:text-sm
            ${isActive ? 'bg-blue-600 text-white' : 
              isCompleted ? 'bg-green-100 text-green-700 border-2 border-green-500' : 
              'bg-gray-100 text-gray-500 border border-gray-300'}
            ${isClickable ? 'cursor-pointer hover:shadow-md' : ''}
            relative z-10
          `;
          
          const labelClasses = `
            step-label text-[0.65rem] sm:text-xs font-medium mt-1 sm:mt-2 text-center
            ${isActive ? 'text-blue-700' : 
              isCompleted ? 'text-green-700' : 
              'text-gray-500'}
          `;
          
          return (
            <div 
              key={step.id} 
              className="step-item flex flex-col items-center"
            >
              <div 
                className={bubbleClasses}
                onClick={() => isClickable ? onNavigate(index) : null}
                title={isClickable ? `Go to ${step.title}` : ''}
              >
                {isCompleted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span className="font-semibold">{index + 1}</span>
                )}
              </div>
              <span className={labelClasses}>
                {step.shortTitle || step.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
