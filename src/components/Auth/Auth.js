import React, { useState } from 'react'
import axios from 'axios'
import logo from './../../images/growtime-logo.png'
import Background from './../Background/Background'
import { connect } from 'react-redux'
import { setUser } from '../../ducks/reducer'

const Auth = (props) => {
  const [username, setUsername] = useState([''])
  const [password, setPassword] = useState([''])

  const handleLogin = () => {
    axios
      .post('/auth/login', { username, password })
      .then((res) => {
        props.setUser(res.data)
        props.history.push('/plantlist')
      })
      .catch((error) => {
        alert('Unable to login.')
      })
  }

  return (
    <div className='auth'>
      <Background />
      <div className='auth-box-container'>
        <div className='auth-box'>
          <h6 id='its'>It's...</h6>
          <img src={logo} alt='logo' className='logo' />
          <h1></h1>
          <p>
            Receive text reminders when to sow, fertilize, treat, and prune each
            plant in your garden.
          </p>
          <h6 id='slogan'>You grow it. We'll time it.</h6>
          <input
            className='master-input-box'
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='master-input-box'
            placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='master-button' onClick={() => handleLogin()}>
            Login
          </button>
          <p id='register-text'>
            <a href='/#/register'>REGISTER</a> as a new user.
          </p>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => state
export default connect(mapStateToProps, { setUser })(Auth)
