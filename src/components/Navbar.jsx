import React from 'react';
import { useHarvest } from '../context/HarvestContext';

const Navbar = () => {
  const { theme, toggleTheme } = useHarvest();

  return (
    <nav className="w-full border-b border-borderGray bg-navBg sticky top-0 z-[100] transition-colors duration-300 shadow-sm">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* KoinX Logo */}
        <div className="flex items-center cursor-pointer select-none">
          <span className="text-2xl font-bold tracking-tight text-[#0052FE]">
            Koin<span className="text-[#FF9900]">X</span>
          </span>
          <span className="text-[10px] text-gray-500 font-medium ml-0.5 self-start mt-4 tracking-tighter">®</span>
        </div>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 ml-4 rounded-lg bg-black/5 dark:bg-white/5 border border-borderGray hover:bg-black/10 dark:hover:bg-white/10 transition-all group"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
