import Singup from './components/Signup';
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './Home';

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Singup />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;


