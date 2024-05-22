import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/navbar/navbar.tsx'
import Resume from './components/resume/resume.tsx'
import Chatbot from './chatbot/chatbot.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <App />
    <Resume />
    <Chatbot />
  </React.StrictMode>,
)
