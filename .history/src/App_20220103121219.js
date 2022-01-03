import Produkt from './components/produkty/produkt'; 
import './App.css';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  
  return (
    <Router>
    <div className="App">
     <NavBar/>
     <div style={{height:"1000px"}}></div>
    </div>
    </Router>
  );
}

export default App;
