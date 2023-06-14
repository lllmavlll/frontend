import React, { useState } from 'react'
import './Login.css'
import { NavLink,useNavigate  } from 'react-router-dom'

const Login = () => {
   
  const navigate = useNavigate()
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  const loginUser= async(e)=>{
    e.preventDefault();

    const res = await fetch('/signin',{
      method:'POST',
      headers:{
        "Content-Type":" application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })
    const  data=res.json()
    if(res.status===400 || !data){
       window.alert(`invalid cresential`)
       console.log(`invalid cresential`)
      }else{
      window.alert(`login succesfull!`)
      navigate('/')
    }

  }

  return (

    <>
        <div  className='loginMain'>
            <div className='loginContainer'>
              <form method='POST'>
                <h1>Login</h1>
                <input className='inputFields' 
                        required autoComplete='off' 
                        type='email' 
                        placeholder='email' 
                        name='email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}/><br/>

                <input className='inputFields' 
                        required autoComplete='off' 
                        type='password' 
                        placeholder='password' 
                        name='password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}/><br/>

                <input className='loginBtn' type='submit' value="Login" onClick={loginUser}/>
                <p className='newP'>New User <NavLink className='signElinks' to='/signup'><b>signup?</b></NavLink></p>

              </form>
            </div>
        </div>
    </>
   
  )
}

export default Login
