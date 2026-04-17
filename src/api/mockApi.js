export const fetchHoldings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          "coin": "USDC",
          "coinName": "USDC",
          "logo": "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
          "currentPrice": 85.41,
          "totalHolding": 0.0015339999999994802,
          "averageBuyPrice": 1.5863185433764244,
          "stcg": { "balance": 0.0015339999999994802, "gain": 0.12858552735441697 },
          "ltcg": { "balance": 0, "gain": 0 }
        },
        {
          "coin": "WETH",
          "coinName": "Polygon POS",
          "logo": "https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332",
          "currentPrice": 211756,
          "totalHolding": 0.00023999998390319965,
          "averageBuyPrice": 3599.856066001555,
          "stcg": { "balance": 0.00023999998390319965, "gain": 49.957471193511736 },
          "ltcg": { "balance": 0, "gain": 0 }
        },
        {
          "coin": "WPOL",
          "coinName": "Wrapped POL",
          "logo": "https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg",
          "currentPrice": 22.08,
          "totalHolding": 2.3172764293128694,
          "averageBuyPrice": 0.5227311370876341,
          "stcg": { "balance": 1.3172764293128694, "gain": 49.954151016387065 },
          "ltcg": { "balance": 1, "gain": 20 }
        },
        {
          "coin": "MATIC",
          "coinName": "Polygon",
          "logo": "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
          "currentPrice": 22.22,
          "totalHolding": 2.75145540184285,
          "averageBuyPrice": 0.6880274617804887,
          "stcg": { "balance": 2.75145540184285, "gain": 59.244262152615974 },
          "ltcg": { "balance": 0, "gain": 0 }
        },
        {
          "coin": "BTC",
          "coinName": "Bitcoin",
          "logo": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
          "currentPrice": 85320.15,
          "totalHolding": 0.63776,
          "averageBuyPrice": 62450.32,
          "stcg": { "balance": 0.338, "gain": -1200 },
          "ltcg": { "balance": 0.300, "gain": 2400 }
        },
        {
          "coin": "ETH",
          "coinName": "Ethereum",
          "logo": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
          "currentPrice": 1640.15,
          "totalHolding": 5.6736,
          "averageBuyPrice": 1200.45,
          "stcg": { "balance": 2.332, "gain": 55320.15 },
          "ltcg": { "balance": 3.345, "gain": 8239.29 }
        },
        {
          "coin": "USDT",
          "coinName": "Tether",
          "logo": "https://coin-images.coingecko.com/coins/images/325/large/tether.png?1696501661",
          "currentPrice": 82.15,
          "totalHolding": 3096.54,
          "averageBuyPrice": 81.15,
          "stcg": { "balance": 2011.23, "gain": -1200 },
          "ltcg": { "balance": 902.47, "gain": 2400 }
        },
        {
          "coin": "SOL",
          "coinName": "Solana",
          "logo": "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1696504756",
          "currentPrice": 12450.32,
          "totalHolding": 12.45,
          "averageBuyPrice": 11000.12,
          "stcg": { "balance": 5.45, "gain": 8500 },
          "ltcg": { "balance": 7, "gain": -1500 }
        }
      ]);
    }, 500);
  });
};

export const fetchCapitalGains = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "capitalGains": {
          "stcg": {
            "profits": 70200.88,
            "losses": 1548.53
          },
          "ltcg": {
            "profits": 5020,
            "losses": 3050
          }
        }
      });
    }, 500);
  });
};
