import React from "react"
import logo from "./../../images/growtime-logo.png"
import Background from "./../Background/Background"

function Auth() {
  return (
    <div className='auth'>
      <Background />
      <div className='auth-box-container'>
        <div className='auth-box'>
          <h6>It's...</h6>
          <img src={logo} alt='logo' className='logo' />
          <h1></h1>
          <p>You grow it. We'll time it.</p>
          <input className='master-input-box' placeholder='Username' />
          <input className='master-input-box' placeholder='Password' />
          <button className='master-button'>Login</button>
          <h6>
            <a href='url'>REGISTER</a> as a new user.
          </h6>
        </div>
      </div>
    </div>
  )
}
export default Auth
