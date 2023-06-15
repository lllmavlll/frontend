import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup/Signup';
import HOme from './Components/Home/HOme';
import Dashboard from './Components/DashBoard/Dashboard';
import Projects from './Components/DashBoard/Projects';
import Quiz from './Components/DashBoard/Quiz';
import Cstudy from './Components/DashBoard/Cstudy';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='home' element={<HOme/>}/>
      <Route path='dashboard' element={<Dashboard/>}>
          <Route path='projects' element={<Projects/>}/>
          <Route path='quiz' element={<Quiz/>}/>
          <Route path='case-studies' element={<Cstudy/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
