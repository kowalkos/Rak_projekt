import Produkt from './components/produkty/produkt'; 
import Galeria from './components/galeria/Galeria';
import './App.css';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  
  return (
    <Router>
    <div className="App">
     <NavBar/>
     <Route path="produkty" component={Produkt}/>
     <Route path="galeria" component={Galeria}/>
    </div>
    </Router>
  );
}

export default App;
