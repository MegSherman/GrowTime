import React, { useEffect } from 'react'
import './styles/styles.scss'
import { HashRouter as Router } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import routes from './routes'
import { withRouter } from 'react-router-dom'
import MobileNav from './components/Nav/MobileNav'
import { connect } from 'react-redux'
import { setUser } from './ducks/authReducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { toast } from 'react-toastify'
import axios from 'axios'

function App(props) {
  useEffect(() => {
    axios
      .get('/auth/getUser')
      .then((user) => {
        props.setUser(user.data)
      })
      .catch((error) => {
        // toast.error(error.response.request.response)
        props.history.push('/')
      })
  }, [])
  return (
    <Router>
      <div className='App'>
        {props.location.pathname !== '/' &&
          props.location.pathname !== '/register' && (
            <>
              <Nav />
              <MobileNav />
            </>
          )}
        {routes}
      </div>
      <ToastContainer />
    </Router>
  )
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps, { setUser })(withRouter(App))
