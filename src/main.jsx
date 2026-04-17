import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HarvestProvider } from './context/HarvestContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HarvestProvider>
      <App />
    </HarvestProvider>
  </React.StrictMode>,
)
