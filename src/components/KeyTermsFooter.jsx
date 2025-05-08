import React from 'react';

const KeyTermsFooter = ({ terms }) => {
  // Navigate to glossary and scroll to the specified term
  const navigateToGlossaryTerm = (term) => {
    console.log(`Navigating to term: ${term}`);
    
    // Get the glossary index (5) from App.jsx steps array
    const glossaryIndex = 5;
    
    // Create and dispatch a custom event for navigation
    const event = new CustomEvent('navigateToStep', { 
      detail: { 
        stepIndex: glossaryIndex,
        termToHighlight: term.toLowerCase().replace(/\s+/g, '-')
      },
      bubbles: true 
    });
    document.dispatchEvent(event);
    
    // Direct approach as fallback
    if (typeof window.goToStep === 'function') {
      window.goToStep(glossaryIndex);
      
      // After navigation, find and scroll to the term
      setTimeout(() => {
        console.log(`Looking for term element: ${term.toLowerCase().replace(/\s+/g, '-')}`);
        const termElement = document.querySelector(`[data-term="${term.toLowerCase().replace(/\s+/g, '-')}"]`);
        console.log("Term element found:", termElement);
        
        if (termElement) {
          termElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add highlight effect
          termElement.classList.add('term-highlight');
          // Remove highlight after 3 seconds
          setTimeout(() => {
            termElement.classList.remove('term-highlight');
          }, 3000);
        }
      }, 500); // Increased delay to ensure the glossary is rendered
    }
  };

  return (
    <div className="key-terms-footer">
      <span className="text-xs font-medium text-gray-500 mr-2">Key Terms:</span>
      <div className="flex flex-wrap gap-2">
        {terms.map((term, index) => (
          <button 
            key={index} 
            className="key-term flex items-center"
            title={`View "${term}" in the glossary`}
            onClick={() => navigateToGlossaryTerm(term)}
            aria-label={`View ${term} definition in glossary`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeyTermsFooter;
