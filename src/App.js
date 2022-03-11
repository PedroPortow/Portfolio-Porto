import './App.css';
import About from './components/About';
import Conhecimentos from './components/Conhecimentos';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Sobre from './components/Sobre';

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Sobre />
      <Projects />
      <Conhecimentos />
    </>
  );
}

export default App;
