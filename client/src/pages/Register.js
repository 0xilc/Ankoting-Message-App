import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <>
    <div className='register'>
      <div className='login-register'>
          <div className='tx-bg-text'>
            register
          </div>
          <div className='inner-login'>
            <div className='tx-modal'>
              <form className='form'>
                <div className='form-row'>
                  <Link to="/" className='logo'>⎾Ankoting⏌</Link>
                  <h4 className='title'>
                    Register
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
                  <label for="pword">Password again</label> 
                  <input className='tx-input' id='pword' placeholder='Password again'></input>
                </div>
                <div className='form-row'>
                  <button className='tx-input-submit'>Register</button>
                </div>
                <div className='form-row'>
                  <Link className='active-text' to="/auth/login">Do you have an account? Login!</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register