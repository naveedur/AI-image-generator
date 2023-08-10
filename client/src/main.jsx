import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'


axios.defaults.baseURL = "https://ai-image-generator-nu.vercel.app/api/v1/"
axios.defaults.headers = { 'Content-Type': 'application/json' }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
