import React, { useState } from 'react';

const Disclaimer = () => {
  const [isOpen, setIsOpen] = useState(true);

  const notes = [
    "Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.",
    "Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.",
    "Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.",
    "Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.",
    "Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted."
  ];

  return (
    <div className="mb-8 border border-borderGray rounded-lg overflow-hidden bg-cardBg transition-colors duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-highlight transition-colors"
      >
        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-500/10 text-koinxBlue">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="flex-1 font-semibold text-sm text-textPrimary">Important Notes & Disclaimers</span>
        <svg 
          className={`w-5 h-5 text-textSecondary transition-transform duration-300 ${isOpen ? '' : '-rotate-90'}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-4 sm:px-12 pb-5 pt-1">
          <ul className="list-disc space-y-2 ml-4">
            {notes.map((note, index) => (
              <li key={index} className="text-[13px] text-textSecondary leading-relaxed font-light">
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Disclaimer;
