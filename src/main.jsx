import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Card from './components/Card'
import Testimonials from './components/Testimonials'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <Card />
    <Testimonials />
  </React.StrictMode>,
)
