import './App.css';
import Home from './screen/Home/Home';
import Contato from './screen/Contato/Contato';
import Projeto from './screen/Projetos/Projeto';
import Sobre from './screen/Sobre/Sobre';
import Cliente from './screen/Cliente/Cilente';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="about" element={<Sobre/>} />
          <Route path="project" element={<Projeto/>} />
          <Route path="client" element={<Cliente/>} />  
          <Route path="contact" element={<Contato/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
