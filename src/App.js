import React, { useState } from 'react'
import './styles/styles.scss'
import { HashRouter as Router } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import routes from './routes'
import { withRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App(props) {
  return (
    <Router>
      <div className='App'>
        {props.location.pathname !== '/' &&
          props.location.pathname !== '/#/register' && <Nav />}
        {routes}
      </div>
      <ToastContainer />
    </Router>
  )
}

export default withRouter(App)
