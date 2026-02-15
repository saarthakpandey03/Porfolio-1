import React from 'react'
import Header from './Components/Header.jsx'
import Info from './Components/Info.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
const App = () => {
  return (
    <div className=''>
      <Header/>
     <Info/>
        <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
