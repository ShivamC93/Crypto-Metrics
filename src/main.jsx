import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoinContextProvider> 
        {/* as we wraaped app inside this component now we 
        can access all the context data inside any component of app component */}
        <App />
      </CoinContextProvider> 
    </BrowserRouter>
  </React.StrictMode>,
)
