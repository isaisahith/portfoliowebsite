import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Skills from './skills/Skills';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Skills/>
    </div>
  );
}

export default App;
