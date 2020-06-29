import React, { useState } from 'react'
import axios from 'axios'
import logo from './../../images/growtime-logo.png'
import Background from './../Background/Background'
import { connect } from 'react-redux'
import { setUser } from '../../ducks/reducer'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = (props) => {
  const [username, setUsername] = useState([''])
  const [password, setPassword] = useState([''])
  const [firstName, setFirstName] = useState([''])
  const [lastName, setLastName] = useState([''])
  const [email, setEmail] = useState([''])
  const [phone, setPhone] = useState([''])
  const [city, setCity] = useState([''])
  const [state, setState] = useState([''])

  const handleRegister = () => {
    // add JS function here to reformat phone number
    axios
      .post('/auth/register', {
        username,
        password,
        firstName,
        lastName,
        email,
        phone,
        city,
        state,
      })
      .then((res) => {
        // props.registerUser(
        //   res.data.id,
        //   res.data.username,
        //   res.data.first_name,
        //   res.data.email,
        //   res.data.phone
        // )
        props.setUser(res.data)
        props.history.push('/plantlist')
      })
      .catch((error) => {
        // console.log(JSON.stringify(error))
        // sends status code:
        console.log(error)
        if (error.response) {
          toast.error(error.response.request.response)
        }
        // alert('Unable to register.')
      })
  }
  return (
    <div className='register'>
      <Background />
      <div className='register-box-container'>
        <div className='register-box'>
          <h1 className='welcome'>Welcome!</h1>
          <p>
            <b>Tell us a bit about yourself - </b>
            <br></br>so we can retrieve plants in your hardiness zone and set up
            text reminders for your calendar.
          </p>
          <input
            className='master-input-box'
            placeholder='First Name'
            type='text'
            attribute='required'
            attribute='autocapitalize'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className='master-input-box'
            placeholder='Last Name'
            type='text'
            attribute='required'
            attribute='autocapitalize'
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className='master-input-box'
            placeholder='Email'
            type='email'
            attribute='required'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='master-input-box'
            placeholder='Phone'
            type='tel'
            pattern='([0-9]{3}) [0-9]{3}-[0-9]{4}'
            attribute='required'
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className='master-input-box'
            placeholder='City'
            type='text'
            attribute='required'
            attribute='autocapitalize'
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className='master-input-box'
            placeholder='State'
            type='text'
            attribute='required'
            attribute='autocapitalize'
            onChange={(e) => setState(e.target.value)}
          />
          <input
            className='master-input-box'
            placeholder='Username'
            type='text'
            attribute='required'
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='master-input-box'
            placeholder='Password'
            type='password'
            attribute='required'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='master-button' onClick={() => handleRegister()}>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps, { setUser })(withRouter(Register))
