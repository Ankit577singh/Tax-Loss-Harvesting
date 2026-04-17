import React, { useState } from 'react';

const Header = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-6 relative">
      <h1 className="text-xl sm:text-2xl font-bold text-textPrimary uppercase tracking-wide">Tax Harvesting</h1>
      <div className="relative">
        <a 
          href="#" 
          className="text-koinxBlue text-sm font-medium hover:underline flex items-center gap-1"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={(e) => { e.preventDefault(); setShowTooltip(!showTooltip); }}
        >
          How it works?
        </a>

        {showTooltip && (
          <div className="absolute top-full left-0 sm:left-1/2 sm:-translate-x-1/2 mt-2 w-[300px] sm:w-[340px] max-w-[calc(100vw-32px)] bg-white text-black p-4 sm:p-5 rounded-lg shadow-2xl z-50 animate-in fade-in zoom-in duration-200 border border-gray-200">
            {/* Tooltip Arrow */}
            <div className="hidden sm:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-200"></div>
            
            <ul className="list-disc pl-4 space-y-3 mb-4">
              <li className="text-sm font-medium leading-5">
                See your capital gains for FY 2024-25 in the left card
              </li>
              <li className="text-sm font-medium leading-5">
                Check boxes for assets you plan on selling to reduce your tax liability
              </li>
              <li className="text-sm font-medium leading-5">
                Instantly see your updated tax liability in the right card
              </li>
            </ul>
            
            <p className="text-sm leading-5">
              <span className="font-bold">Pro tip:</span> Experiment with different combinations of your holdings to optimize your tax liability
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
