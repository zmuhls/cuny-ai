import React from 'react';

const NavigationControls = ({ onPrevious, onNext, hasPrevious, hasNext }) => {
  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-3">
      {/* Mobile-friendly previous button */}
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className={`flex items-center space-x-1 px-2 sm:px-3 py-2 rounded-md transition-all duration-200 text-xs sm:text-sm
          ${hasPrevious 
            ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 hover:-translate-x-0.5 touch-manipulation' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
        aria-label="Go to previous step"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="hidden sm:inline">Previous</span>
        <span className="sm:hidden">Prev</span>
      </button>
      
      {/* Mobile-friendly next button */}
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`flex items-center space-x-1 px-2 sm:px-3 py-2 rounded-md transition-all duration-200 text-xs sm:text-sm
          ${hasNext 
            ? 'bg-blue-600 text-white hover:bg-blue-700 hover:translate-x-0.5 touch-manipulation' 
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
        aria-label="Go to next step"
      >
        <span>Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default NavigationControls;
