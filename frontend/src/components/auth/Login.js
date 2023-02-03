import React from 'react';
import "./Login.css";
import {signInWithPopup} from 'firebase/auth'
import { auth, provider } from '../../firebase';

function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider).then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error);
    } )
  }

  return ( 
  <div className='login-container'>
    <div className='login-content'>
      <img src="./images/aback_logo.png"
      alt='logo' />
      <button onClick = {handleSubmit} className="btn-login">Login to continue</button>
    </div>
  </div>
  )
}

export default Login