# 🚀 KoinX Tax Loss Harvesting Simulator

Optimizing your crypto portfolio has never been easier. This tool helps you strategically realize losses to offset your capital gains, significantly reducing your tax liability in real-time.


## ✨ Key Features

- **📊 Real-Time Simulation**: Instantly see the impact of harvesting specific assets on your "After Harvesting" report.
- **🔄 Dynamic Calculation**: Sophisticated logic that automatically categorizes gains and losses into Short-term (STCG) and Long-term (LTCG).
- **🌗 Dual-Theme Support**: A premium design that looks stunning in both Light and Dark modes.
- **📱 Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices.
- **⚡ Interactive Sorting**: Sort your holdings to identify the best candidates for harvesting.

## 🛠️ Setup Instructions

Follow these steps to get the project running locally:

### 1. Clone the repository
```bash
git clone <repo-url>
cd <project-folder>
```

### 2. Install dependencies
Ensure you have [Node.js](https://nodejs.org/) installed.
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🧠 Business Logic 

### Tax Harvesting Logic
The simulation follows these core rules for every asset you select in the holdings table:
- **If Gain > 0**: The value is added to your **Profits**.
- **If Gain < 0**: The value is added to your **Losses**.
- **Net Calculation**: Net Gain = (Initial Profits + New Profits) - (Initial Losses + New Losses).
- **Savings Message**: The "You are going to save" alert appears only when your effective gains after harvesting are lower than your pre-harvesting realized gains.

### Assumptions
- **Mock Data**: For demonstration purposes, this tool uses a local mock API (`src/api/mockApi.js`).
- **Currency**: The tool currently standardizes on **₹ (INR)** / **$ (USD)** depending on the chosen configuration, using the Indian numbering system formatting (`en-IN`).
- **Realized vs Unrealized**: The tool assumes "Holding" data points represent unrealized positions that are candidates for sale to achieve the tax harvest.

## 🤝 Contribution

This was developed as part of an technical internship assignment, focusing on high-performance React patterns, clean Tailwind V4 styling, and precise financial calculations.

---
