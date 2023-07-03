import About from "./Componant/About/About"
import Contact from "./Componant/Contact/Contact"
import Hader from "./Componant/Hader/Hader"
import Project from "./Componant/Project/Project"
import Skill from "./Componant/Skill/Skill"
import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <div className="container font-extralight mx-auto md:px-20 lg:px-32 p-8">
        <Hader></Hader>
        <About></About>
        <Skill></Skill>
        <Project></Project>
        <Contact></Contact>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
