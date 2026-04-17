/**
 * Business Logic for Tax Harvesting
 */

export const calculatePreHarvest = (capitalGains) => {
  if (!capitalGains) return null;

  const { stcg, ltcg } = capitalGains;

  const netSTCG = stcg.profits - stcg.losses;
  const netLTCG = ltcg.profits - ltcg.losses;
  const realisedGains = netSTCG + netLTCG;

  return {
    stcg: { ...stcg, net: netSTCG },
    ltcg: { ...ltcg, net: netLTCG },
    realisedGains
  };
};

export const calculateAfterHarvest = (preHarvest, selectedAssets) => {
  if (!preHarvest) return null;

  let afterSTCG = { ...preHarvest.stcg };
  let afterLTCG = { ...preHarvest.ltcg };

  selectedAssets.forEach(asset => {
    // STCG
    if (asset.stcg.gain > 0) {
      afterSTCG.profits += asset.stcg.gain;
    } else if (asset.stcg.gain < 0) {
      afterSTCG.losses += Math.abs(asset.stcg.gain);
    }

    // LTCG
    if (asset.ltcg.gain > 0) {
      afterLTCG.profits += asset.ltcg.gain;
    } else if (asset.ltcg.gain < 0) {
      afterLTCG.losses += Math.abs(asset.ltcg.gain);
    }
  });

  const netSTCG = afterSTCG.profits - afterSTCG.losses;
  const netLTCG = afterLTCG.profits - afterLTCG.losses;
  const effectiveGains = netSTCG + netLTCG;

  return {
    stcg: { ...afterSTCG, net: netSTCG },
    ltcg: { ...afterLTCG, net: netLTCG },
    effectiveGains
  };
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(amount);
};
