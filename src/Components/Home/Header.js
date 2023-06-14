import React from 'react'
import './Home.css'

const Header = () => {
  return (
    <>
        <div className='headermain'>
            <h1 className='Logo'>Logo</h1>
            <div className='nav'>
                <li>link 1</li>
                <li>link 2</li>
            </div>

            <div className='logout-sec'>
                logout
            </div>

        </div>  
    </>
  )
}

export default Header
