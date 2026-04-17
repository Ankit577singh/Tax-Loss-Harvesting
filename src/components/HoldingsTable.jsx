import React, { useState } from 'react';
import { useHarvest } from '../context/HarvestContext';
import { formatCurrency } from '../utils/calculations';
import PriceTooltip from './ui/PriceTooltip';

const HoldingsTable = () => {
  const { 
    holdings, 
    selectedAssetIds, 
    toggleAssetSelection, 
    toggleAllSelections 
  } = useHarvest();

  const [isExpanded, setIsExpanded] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortedHoldings = React.useMemo(() => {
    let items = [...holdings];
    if (sortConfig.key) {
      items.sort((a, b) => {
        const valA = sortConfig.key === 'stcg' ? a.stcg.gain : a[sortConfig.key];
        const valB = sortConfig.key === 'stcg' ? b.stcg.gain : b[sortConfig.key];
        
        if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
        if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return items;
  }, [holdings, sortConfig]);

  const visibleHoldings = isExpanded ? sortedHoldings : sortedHoldings.slice(0, 4);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const isAllSelected = holdings.length > 0 && selectedAssetIds.length === holdings.length;

  return (
    <div className="bg-cardBg rounded-xl border border-borderGray shadow-sm overflow-hidden transition-colors duration-300">
      <div className="p-6 pb-2">
        <h2 className="text-xl font-bold mb-4">Holdings</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-tableHeaderBg text-textSecondary font-semibold border-y border-borderGray">
            <tr>
              <th className="px-6 py-4">
                <input 
                  type="checkbox" 
                  checked={isAllSelected}
                  onChange={toggleAllSelections}
                />
              </th>
              <th className="px-4 py-4 min-w-[200px]">Asset</th>
              <th className="px-4 py-4 min-w-[150px]">Holdings <br/><span className="text-[10px] font-normal">Current Market Rate</span></th>
              <th className="px-4 py-4">Total Current Value</th>
              <th 
                className="px-4 py-4 cursor-pointer hover:bg-highlight transition-colors group/sort"
                onClick={() => requestSort('stcg')}
              >
                <div className="flex items-center gap-1 group-hover/sort:text-koinxBlue transition-colors">
                  <span>Short-term</span>
                  <div className="inline-flex flex-col">
                    <svg className={`w-2.5 h-2.5 ${sortConfig.key === 'stcg' && sortConfig.direction === 'asc' ? 'text-koinxBlue' : 'text-textSecondary/30'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 5l-5 5h10l-5-5z" />
                    </svg>
                    <svg className={`w-2.5 h-2.5 -mt-1 ${sortConfig.key === 'stcg' && sortConfig.direction === 'desc' ? 'text-koinxBlue' : 'text-textSecondary/30'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15l5-5H5l5 5z" />
                    </svg>
                  </div>
                </div>
              </th>
              <th className="px-4 py-4">Long-Term</th>
              <th className="px-4 py-4">Amount to Sell</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-borderGray">
            {visibleHoldings.map((asset) => {
              const isSelected = selectedAssetIds.includes(asset.coin);
              const currentValue = asset.totalHolding * asset.currentPrice;
              
              return (
                <tr 
                  key={asset.coin} 
                  className={`hover:bg-highlight transition-colors group ${
                    isSelected ? 'bg-highlight' : ''
                  }`}
                >
                  <td className="px-6 py-4 text-center">
                    <input 
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleAssetSelection(asset.coin)}
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center p-1">
                        <img src={asset.logo} alt={asset.coin} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-textPrimary">{asset.coinName}</span>
                        <span className="text-xs text-textSecondary uppercase tracking-tight">{asset.coin}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-textPrimary">
                        {asset.totalHolding.toFixed(6)} {asset.coin}
                      </span>
                      <span className="text-xs text-textSecondary">
                        {formatCurrency(asset.currentPrice)} / {asset.coin}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-bold text-textPrimary">
                    <PriceTooltip 
                      label="Total Value" 
                      value={currentValue.toLocaleString('en-IN', { 
                        style: 'currency', 
                        currency: 'INR', 
                        maximumFractionDigits: 8 
                      })}
                    >
                      <span className="cursor-help border-b border-dotted border-borderGray">
                        {currentValue.toLocaleString('en-IN', { 
                          style: 'currency', 
                          currency: 'INR', 
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2 
                        })}
                      </span>
                    </PriceTooltip>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className={`font-bold ${asset.stcg.gain >= 0 ? 'text-[#0EB774]' : 'text-[#EF4444]'}`}>
                        {asset.stcg.gain >= 0 ? '+' : ''}{formatCurrency(asset.stcg.gain)}
                      </span>
                      <span className="text-xs text-textSecondary">
                        {asset.stcg.balance.toFixed(3)} {asset.coin}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className={`font-bold ${asset.ltcg.gain >= 0 ? 'text-[#0EB774]' : 'text-[#EF4444]'}`}>
                        {asset.ltcg.gain >= 0 ? '+' : ''}{formatCurrency(asset.ltcg.gain)}
                      </span>
                      <span className="text-xs text-textSecondary">
                        {asset.ltcg.balance.toFixed(3)} {asset.coin}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-textSecondary font-medium ml-4">
                      {isSelected ? `${asset.totalHolding.toFixed(4)} ${asset.coin}` : '-'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {holdings.length > 4 && (
        <div className="px-6 py-4">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-koinxBlue text-sm font-semibold hover:underline"
          >
            {isExpanded ? 'View less' : 'View all'}
          </button>
        </div>
      )}
    </div>
  );
};

export default HoldingsTable;
