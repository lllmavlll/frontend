import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='headermain'>
            <h1 className='Logo'>Learn<span>EZ</span></h1>
            <div className='nav'>
                <Link to='/dashboard'><li>Dashboard</li></Link>
                <li>support</li>
            </div>

            <div className='logout-sec'>
                logout
            </div>

        </div>  
    </>
  )
}

export default Header
