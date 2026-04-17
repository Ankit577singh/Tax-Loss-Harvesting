import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-borderGray rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-koinxBlue rounded-full border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-textSecondary font-medium animate-pulse">Loading holdings data...</p>
    </div>
  );
};

export default Loader;
