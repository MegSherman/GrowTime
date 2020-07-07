import React, { useState, useCallback } from 'react'
import logo from './../../images/growtime-logo.png'
import { HamburgerArrow } from 'react-animated-burgers'
import { Transition } from 'react-transition-group'
import { connect } from 'react-redux'
import { setUser } from './../../ducks/authReducer'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const MobileNav = (props) => {
  const { push } = useHistory()
  const [isActive, setIsActive] = useState(false)
  const toggleButton = useCallback(() => setIsActive((pre) => !pre), [
    setIsActive,
  ])

  const handleLogout = () => {
    axios
      .delete('/auth/logout')
      .then(() => {
        // console.log(props.user)
        props.setUser(null)
        push('/')
      })
      .catch((error) => {
        console.log(error)
        alert('Unable to logout.')
      })
  }

  return (
    <div className='mobile-nav-bar'>
      <div className='logo-block'>
        <img src={logo} alt='GrowTime logo' className='nav-logo' />
        <div className='welcome-and-logout'>
          {/* <h4>Welcome!</h4> */}
          <h4>Welcome, {props.user && props.user.first_name}!</h4>
          <a className='logout' onClick={() => handleLogout()}>
            Logout
          </a>
        </div>
      </div>
      <Transition timeout={1000} in={isActive} appear>
        {(status) => (
          <nav className={`box box-${status}`}>
            {console.log(status)}
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
        )}
      </Transition>
      <HamburgerArrow
        buttonWidth={30}
        className='hamburger-icon'
        {...{ isActive, toggleButton }}
      />
    </div>
  )
}
const mapStateToProps = (state) => state
export default connect(mapStateToProps, { setUser })(MobileNav)
