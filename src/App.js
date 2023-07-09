import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productpage from './Productpage';
import Navbar from './Navbar';
import Login from './Login';
import Productdetail from './Productdetail'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/home' element = {<Productpage/>}/>
        <Route path='/' element = {<Productdetail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
