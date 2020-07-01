import React, { useState, useEffect } from 'react'
import logo from './../../images/growtime-logo.png'
import { connect } from 'react-redux'
import { setUser } from './../../ducks/reducer'
// import { logout } from '../../../server/authController'
import axios from 'axios'

const Nav = (props) => {
  console.log(props)

  // useEffect(() => {
  //   props.setUser()
  // }, [])

  const handleLogout = () => {
    axios
      .delete('/auth/logout')
      .then(() => {
        props.history.push('/')
      })
      .catch((error) => alert('Unable to logout.'))
  }

  return (
    <div className='nav-bar'>
      <div className='logo-block'>
        <img src={logo} alt='GrowTime logo' className='nav-logo' />
        <div className='welcome-and-logout'>
          <h3>Welcome!</h3>
          {/* <h4>Welcome, {props.user.first_name}!</h4> */}
          <a className='logout' onClick={() => handleLogout()}>
            Logout
          </a>
        </div>
      </div>
      <nav className='link-row'>
        <a className='nav-link' href='/#/plantlist'>
          Plant List
        </a>
        <a className='nav-link' href='/#/addplant'>
          Add a Plant
        </a>
        <a className='nav-link' href='/#/profiles/:plantid'>
          Plant Profiles
        </a>
        <a className='nav-link' href='/#/database'>
          Database
        </a>
      </nav>
    </div>
  )
}
const mapStateToProps = (state) => state
export default connect(mapStateToProps, { setUser })(Nav)
