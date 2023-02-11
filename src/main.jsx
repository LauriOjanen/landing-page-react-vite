import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Main />
  </React.StrictMode>,
)
