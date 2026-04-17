import React from 'react';
import { useHarvest } from '../context/HarvestContext';
import { formatCurrency } from '../utils/calculations';
import StatRow from './ui/StatRow';

const HarvestingCard = ({ title, data, isAfter = false }) => {
  if (!data) return null;

  return (
    <div className={`w-full rounded-xl p-5 sm:p-6 transition-card ${isAfter
      ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-900/20 text-white'
      : 'bg-cardBg border border-borderGray shadow-sm text-textPrimary'
      }`}>
      <h3 className="text-lg font-bold mb-4">{title}</h3>

      <div className="flex justify-between gap-1 sm:gap-8   mb-2 min-w-[140px] sm:min-w-[180px]">
        {/* <span className={`flex-1 text-right text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold ${isAfter ? 'text-blue-100' : 'text-textSecondary'}`}></span> */}
        {/* <span className={`flex-1 text-right text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold ${isAfter ? 'text-blue-100' : 'text-textSecondary'}`}></span> */}
        <div className='flex w-1/2 gap-1 sm:gap-8'>
          <span className={`flex-1 text-right text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold ${isAfter ? 'text-blue-100' : 'text-textSecondary'}`}></span>
        </div>
        <div className='flex w-1/2 gap-1 sm:gap-8'>
          <span className={`flex-1 text-right text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold ${isAfter ? 'text-blue-100' : 'text-textSecondary'}`}>Short-term</span>
          <span className={`flex-1 text-right text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold ${isAfter ? 'text-blue-100' : 'text-textSecondary'}`}>Long-term</span>
        </div>
      </div>

      <div className="space-y-1">
        <StatRow label="Profits" st={data.stcg.profits} lt={data.ltcg.profits} isAfter={isAfter} />
        <StatRow label="Losses" st={-data.stcg.losses} lt={-data.ltcg.losses} isAfter={isAfter} />
        <StatRow label="Net Capital Gains" st={data.stcg.net} lt={data.ltcg.net} isNet isAfter={isAfter} />
      </div>

      <div className="mt-6 sm:mt-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
          <span className={`text-sm sm:text-base font-medium ${isAfter ? 'text-blue-50' : 'text-textSecondary'}`}>
            {isAfter ? 'Effective Capital Gains:' : 'Realised Capital Gains:'}
          </span>
          <span className="text-2xl sm:text-3xl font-bold">
            {data.realisedGains !== undefined
              ? formatCurrency(data.realisedGains)
              : formatCurrency(data.effectiveGains)}
          </span>
        </div>
      </div>
    </div>
  );
};

const HarvestCards = () => {
  const { preHarvestData, afterHarvestData } = useHarvest();

  if (!preHarvestData || !afterHarvestData) return null;

  const savings = preHarvestData.realisedGains - afterHarvestData.effectiveGains;

  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-8 items-stretch">
      <div className="flex-1">
        <HarvestingCard title="Pre Harvesting" data={preHarvestData} />
      </div>
      <div className="flex-1 flex flex-col">
        <HarvestingCard title="After Harvesting" data={afterHarvestData} isAfter />
        {savings > 0 && (
          <div className="mt-4 flex items-center gap-2 font-semibold text-sm animate-bounce-subtle">
            <span>🔥</span>
            <span>You're going to save upto {formatCurrency(savings)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HarvestCards;
