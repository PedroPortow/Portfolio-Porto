import './App.css';
import About from './components/About';
import Conhecimentos from './components/Conhecimentos';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Sobre from './components/Sobre';
import {useState} from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [ isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }



  return (
    <>
      <Header toggle={toggle}/>
      <Sidebar  isOpen={isOpen} toggle={toggle}/>
      <Home/>
      <Sobre />
      <Projects />
      <Conhecimentos />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
