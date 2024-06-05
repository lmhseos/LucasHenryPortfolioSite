import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home/home.tsx'
import './index.css'
import Chatbot from './components/chatbot/chatbot.tsx'
import Navbar from './components/navbar/navbar.tsx'
import WorkExperience from './components/experience/experience.tsx'
import Projects from './components/projects/projects.tsx'
import ContactForm from './components/contact/contactform.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='maincontainer'>
    <Navbar />
    <Home />
    <Chatbot />
    <WorkExperience />
    <Projects />
    <ContactForm />
    </div>
  </React.StrictMode>
)
