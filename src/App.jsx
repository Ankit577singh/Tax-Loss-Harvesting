import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Disclaimer from './components/Disclaimer';
import HarvestCards from './components/HarvestCards';
import HoldingsTable from './components/HoldingsTable';
import Loader from './components/Loader';
import { useHarvest } from './context/HarvestContext';

function App() {
  const { loading, error, theme } = useHarvest();

  if (loading) {
    return (
      <div className={`min-h-screen bg-pageBg flex items-center justify-center p-4 ${theme === 'light' ? 'theme-light' : ''}`}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen bg-pageBg flex items-center justify-center p-4 ${theme === 'light' ? 'theme-light' : ''}`}>
        <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-xl max-w-md text-center">
          <h2 className="text-xl font-bold text-red-100 mb-2">Error</h2>
          <p className="text-red-200/80 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600/30 hover:bg-red-600/50 rounded-lg transition-colors text-white font-medium"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-pageBg text-textPrimary selection:bg-koinxBlue selection:text-white transition-colors duration-300 ${
      theme === 'light' ? 'theme-light' : ''
    }`}>
      <Navbar />
      <main className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <Header />
        <Disclaimer />
        <HarvestCards />
        <HoldingsTable />
        
        <footer className="mt-12 text-center text-gray-500 text-[11px] font-medium tracking-wide uppercase">
          KoinX Tax Harvesting Tool • © 2026
        </footer>
      </main>
    </div>
  );
}

export default App;
