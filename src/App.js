import React, { useEffect } from 'react'
import './styles/styles.scss'
import { HashRouter as Router } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import routes from './routes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser } from './ducks/reducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

function App(props) {
  useEffect(() => {
    axios
      .get('/auth/getUser')
      .then((res) => {
        props.setUser(res.data)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <Router>
      <div className='App'>
        {props.location.pathname !== '/' &&
          props.location.pathname !== '/register' && <Nav />}
        {routes}
      </div>
      <ToastContainer />
    </Router>
  )
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps, { setUser })(withRouter(App))
