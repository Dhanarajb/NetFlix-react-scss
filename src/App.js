
import './App.scss';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/login/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Register />}  />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
