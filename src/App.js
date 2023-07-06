import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Productpage from './Productpage';
import Navbar from './Navbar';
import Login from './Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/' element = {<Productpage/>}/>
        <Route path='/' element = {<Productdetail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
