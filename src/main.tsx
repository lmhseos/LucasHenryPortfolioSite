import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home/Home.tsx'
import './index.css'
import Resume from './components/resume/resume.tsx'
import Chatbot from './components/chatbot/chatbot.tsx'
import Navbar from './components/navbar/navbar.tsx'
import WorkExperience from './components/experience/experience.tsx'
import Projects from './components/projects/projects.tsx'
import ContactForm from './components/contact/contactform.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Chatbot />
    <WorkExperience />
    <Resume />
    <Projects />
    <ContactForm />
  </React.StrictMode>
)
