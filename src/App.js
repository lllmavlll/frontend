import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup/Signup';
import HOme from './Components/Home/HOme';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='home' element={<HOme/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
