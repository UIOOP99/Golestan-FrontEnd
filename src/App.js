import logo from './logo.svg';
import './App.css';
import MasterMainPage from './components/MasterMainPage';
import RedirectPage from '../src/RedirectPage'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
     
      <RedirectPage />
      
    </div>
  );
}

export default App;

