import Produkt from './components/produkty/produkt'; 
import Galeria from './components/galeria/Galeria';
import Main from './components/main/Main';
import './App.css';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  
  return (
    <Router>
    <div className="App">
     <NavBar/>
     <Routes>
     <Route path="/" element={<Main/>}/>
     <Route path="/Faq"element={<Galeria/>}/>
     <Route path="/produkty" element={<Produkt/>}/>
     <Route path="/galeria"element={<Galeria/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
