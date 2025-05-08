import React from 'react';

const KeyTermsFooter = ({ terms }) => {
  return (
    <div className="key-terms-footer">
      <span className="text-xs font-medium text-gray-500 mr-2">Key Terms:</span>
      <div className="flex flex-wrap gap-2">
        {terms.map((term, index) => (
          <span 
            key={index} 
            className="key-term"
            title={`Click to search for "${term}" definition`}
            onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(term)}+ai+definition`, '_blank')}
          >
            {term}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeyTermsFooter;
