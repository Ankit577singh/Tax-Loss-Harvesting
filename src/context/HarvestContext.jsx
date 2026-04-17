import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { fetchHoldings, fetchCapitalGains } from '../api/mockApi';
import { calculatePreHarvest, calculateAfterHarvest } from '../utils/calculations';

const HarvestContext = createContext();

export const HarvestProvider = ({ children }) => {
  const [holdings, setHoldings] = useState([]);
  const [capitalGainsData, setCapitalGainsData] = useState(null);
  const [selectedAssetIds, setSelectedAssetIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Theme state with persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('koinx-theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('koinx-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [holdingsRes, gainsRes] = await Promise.all([
          fetchHoldings(),
          fetchCapitalGains()
        ]);
        setHoldings(holdingsRes);
        setCapitalGainsData(gainsRes.capitalGains);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const preHarvestData = useMemo(() => {
    return calculatePreHarvest(capitalGainsData);
  }, [capitalGainsData]);

  const selectedAssets = useMemo(() => {
    return holdings.filter((asset) => selectedAssetIds.includes(asset.coin));
  }, [holdings, selectedAssetIds]);

  const afterHarvestData = useMemo(() => {
    return calculateAfterHarvest(preHarvestData, selectedAssets);
  }, [preHarvestData, selectedAssets]);

  const toggleAssetSelection = (coinSymbol) => {
    setSelectedAssetIds(prev => 
      prev.includes(coinSymbol) 
        ? prev.filter(id => id !== coinSymbol) 
        : [...prev, coinSymbol]
    );
  };

  const toggleAllSelections = () => {
    if (selectedAssetIds.length === holdings.length) {
      setSelectedAssetIds([]);
    } else {
      setSelectedAssetIds(holdings.map((asset) => asset.coin));
    }
  };

  const value = {
    holdings,
    preHarvestData,
    afterHarvestData,
    selectedAssetIds,
    loading,
    error,
    toggleAssetSelection,
    toggleAllSelections,
    theme,
    toggleTheme
  };

  return (
    <HarvestContext.Provider value={value}>
      {children}
    </HarvestContext.Provider>
  );
};

export const useHarvest = () => {
  const context = useContext(HarvestContext);
  if (!context) {
    throw new Error('useHarvest must be used within a HarvestProvider');
  }
  return context;
};
