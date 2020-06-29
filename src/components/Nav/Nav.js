import React, { useState, useEffect } from 'react'
import logo from './../../images/growtime-logo.png'
import { connect } from 'react-redux'
import { setUser } from './../../ducks/reducer'

const Nav = (props) => {
  console.log(props)

  useEffect(() => {
    props.setUser()
  }, [])

  return (
    <div className='nav-bar'>
      <img src={logo} alt='GrowTime logo' />
      <div className='welcome-and-logout'>
        <h5>Welcome, {props.user.first_name}!</h5>
        <a className='logout'>Logout</a>
      </div>
      <nav>
        <a className='nav-link'>My Plant List</a>
        <a className='nav-link'>Add a Plant</a>
        <a className='nav-link'>Plant Profiles</a>
        <a className='nav-link'>Database</a>
      </nav>
    </div>
  )
}
const mapStateToProps = (state) => state
export default connect(mapStateToProps, { setUser })(Nav)
