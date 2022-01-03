import Produkt from './components/produkty/produkt'; 
import Galeria from './components/galeria/Galeria';
import './App.css';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  
  return (
    <Router>
    <div className="App">
     <NavBar/>
     <Routes>
     <Route path="produkty">
       <Produkt/>
       </Route>
     <Route path="galeria" />
     <Galeria/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
