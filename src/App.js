import React, { useState } from "react"
import "./styles/styles.scss"
import { HashRouter } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import routes from "./routes"
import { withRouter } from "react-router-dom"

function App(props) {
  return (
    <HashRouter>
      <div className='App'>
        {props.location.pathname !== "/" &&
          props.location.pathname !== "/register" && <Nav />}
        {routes}
      </div>
    </HashRouter>
  )
}

export default withRouter(App)
