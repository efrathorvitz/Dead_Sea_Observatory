import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppDemo from './AppDemo.jsx'
import App from './App.jsx'
import ResearchProjectPage from './ResearchProjectPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
