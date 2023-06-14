import React from 'react'
import { NavLink,  } from 'react-router-dom'


const Signup = () => {
  return (
   <>
       <div  className='loginMain'>
            <div className='loginContainer'>
              <form method='POST'>
                <h1>Signup</h1>
                <input className='inputFields' required autoComplete='off' type='email' placeholder='email' name='email'/><br/>
                <input className='inputFields' required autoComplete='off' type='password' placeholder='password' name='password'/><br/>
                <input className='loginBtn' type='submit' value="Login"/>
                <p className='newP'>Already have an account? <NavLink className='signElinks' to='/'><b>login?</b></NavLink></p>

              </form>
            </div>
        </div>
   </>
  )
}

export default Signup
