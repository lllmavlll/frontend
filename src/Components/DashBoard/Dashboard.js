import React from 'react'
import './Dashboard.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Projects from './Projects'
import Quiz from './Quiz'
import Cstudy from './Cstudy'

const Dashboard = () => {
  return (
   <>
    <div className='dashBoardMain'>
      <div className='dashNav'>
        <NavLink to={'/home'}>
          <h4>Learn<span>EZ</span></h4>
        </NavLink>
      </div>

      <p className='dash-head'>
      Full Stack Web Development Bootcamp - 05
      </p>
      <section className='courses'>
        <Link to={'projects'}>
          <div>
            projects
          </div>
        </Link>
        <Link to={'quiz'}>
          <div>
              Quizzes
          </div>
        </Link>
        <Link to={'case-studies'}>
          <div>
           Case studies
          </div>
        </Link>
      </section>

      <section className='courses-result'>
        <Routes>
          <Route path='projects' element={<Projects/>}/>
          <Route path='quiz' element={<Quiz/>}/>
          <Route path='case-studies' element={<Cstudy/>}/>
        </Routes>

      </section>
    </div>
   </>
  )
}

export default Dashboard
