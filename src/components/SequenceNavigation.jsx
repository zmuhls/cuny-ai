import React from 'react';

const SequenceNavigation = ({ steps, currentIndex, onNavigate }) => {
  return (
    <div className="mb-4 bg-gray-50 p-3 rounded-lg border border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="sequence-nav" aria-label="Course progression">
        <ol className="flex flex-wrap items-center">
          {steps.map((step, index) => {
            const isActive = index === currentIndex;
            const isCompleted = index < currentIndex;
            
            return (
              <li key={step.id} className="flex items-center">
                {index > 0 && (
                  <svg className="h-4 w-4 text-gray-400 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                
                <button
                  className={`sequence-nav-item px-2 py-1 rounded-md transition-all duration-200 ${
                    isActive 
                      ? 'active bg-blue-600 text-white' 
                      : isCompleted 
                        ? 'completed bg-green-50 text-green-600 border border-green-200' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => onNavigate(index)}
                  aria-current={isActive ? 'step' : undefined}
                  title={step.fullTitle || step.title}
                >
                  <span className="text-xs font-medium">
                    {index + 1}. {step.shortTitle || step.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default SequenceNavigation;
