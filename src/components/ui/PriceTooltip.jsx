import React, { useState } from 'react';

const PriceTooltip = ({ label, value, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => setIsVisible(!isVisible)} // Mobile toggle
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-[110] bg-white text-black px-4 py-2 rounded-lg shadow-2xl min-w-[140px] text-center animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
          <div className="text-sm font-bold whitespace-nowrap">{value}</div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
        </div>
      )}
    </div>
  );
};

export default PriceTooltip;
