
import './App.css';
import Header from './Components/Organisms/Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';


function App() {
  return (
    <>
      <Router>
        <Routes>
          
          <Route path="/" element={<Login/>}/>
        </Routes>
        
      </Router>
      
    </>
  );
}

export default App;
