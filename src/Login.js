import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const login = (event) => {
    event.preventDefault()//this stops the refresh
    //do the login logic
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in,redirect to the homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event )=> {
    event.preventDefault()
    //do the register logic
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      //created a user and logged in,redirect to the homepage
      history.push("/");
    })
    .catch((e) => alert(e.message));
  };

  return(
    <div className='login'>
      <Link to='/'>
      <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
      </Link>
      <div className='login_container'>
      <h1 style={{textAlign:'center'}}>Sign in</h1>
      <form>
      <h5>E-mail</h5>
      <input value={email} onChange={event => setEmail(event.target.value)} type='email' placeholder='input your email'/>
      <h5>Password</h5>
      <input value={password} onChange={event => setPassword(event.target.value)} type='Password' />
      <button onClick={login} type='submit' className='login_signInButton'>Sign In</button>
      </form>
      <p>By Signing in you are agreeing to Amazon's terms and conditions of use and sale.
      Please see our privacy Notice,our Cookies Notice and our interest based Ads Notice</p>
      <button onClick={register} className='login_registerButton'>Create your Amazon account</button>
      </div>
    </div>
  )
}

export default Login;
