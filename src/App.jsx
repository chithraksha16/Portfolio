import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
function App() {


  return (
    <>
    <div className='bg-white dark:bg-black'>
    <Navbar/>
    <About/>
    <Experience/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
    </>
  )
}

export default App
