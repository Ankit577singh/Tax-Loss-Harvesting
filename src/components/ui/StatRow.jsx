import React from 'react';

const StatRow = ({ label, st, lt, isNet = false, isAfter = false }) => {
  const formatVal = (val) => {
    const formatted = Math.abs(val).toLocaleString('en-IN');
    return val < 0 ? `- ₹${formatted}` : `₹${formatted}`;
  };

  return (
    <div className={`flex items-center justify-between py-2 ${isNet ? `border-t ${isAfter ? 'border-white/20' : 'border-borderGray'} mt-1 font-bold` : ''}`}>
      <span className={`text-sm ${isNet ? (isAfter ? 'text-white' : 'text-textPrimary') : (isAfter ? 'text-blue-100' : 'text-textSecondary')}`}>
        {label}
      </span>
      <div className="flex gap-4 w-1/2 sm:gap-8 min-w-[140px] sm:min-w-[180px]">
        <span className={`flex-1 text-right text-sm ${isAfter ? 'text-white' : 'text-textPrimary'}`}>
          {formatVal(st)}
        </span>
        <span className={`flex-1 text-right text-sm ${isAfter ? 'text-white' : 'text-textPrimary'}`}>
          {formatVal(lt)}
        </span>
      </div>
    </div>
  );
};

export default StatRow;
