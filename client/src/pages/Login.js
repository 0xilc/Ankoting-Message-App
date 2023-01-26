import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
    <div className='login'>
      <div className='login-register'>
        <div className='tx-bg-text'>
          login
        </div>
        <div className='inner-login'>

          <div className='tx-modal'>
            <form className='form'>
              <div className='form-row'>
                  <Link to="/" className='logo'>⎾Ankoting⏌</Link>
                  <h4 className='title'>
                    Login 
                  </h4>
              </div>
              <div className='form-row'>
                <label for="uname">Username</label> 
                <input className='tx-input' id="uname" placeholder='Username'></input>
              </div>
              <div className='form-row'>
                <label for="pword">Password</label> 
                <input className='tx-input' id='pword' placeholder='Password'></input>
              </div>
              <div className='form-row'>
                <button className='tx-input-submit'>Login</button>
              </div>
              <div className='form-row'>
                <Link className='active-text' to="/auth/register">Don't you have an account? Register</Link>
              </div>
              <div className='form-row'>
                <Link className='passive-text' to="/forgot-password">Forgot Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login