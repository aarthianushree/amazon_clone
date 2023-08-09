import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
// import { auth } from './firebase';
import { useState } from 'react';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <div className='login'>

    <Link to="/">
    <img className='login_logo'
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
    />
    </Link>

    <div className='login_container'>
      <h1>Sign-In</h1>
      <form>

      <h5>E-mail</h5>
      <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>

      <h5>Password</h5>
      <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
      
      <Link to="/">
      <button onClick={()=>alert("signed in successfully")} className='login_signInButton'>Sign-In</button>
      </Link>
      

      </form>

      <p>By signing-in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

      <button  className='login_registerButton'>Create your Amazon Account</button>
    </div>

    </div>
  )
}

export default Login