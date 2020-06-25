import React from "react"
import { Switch, Route } from "react-router-dom"
import Auth from "./components/Auth/Auth"
import Register from "./components/Register/Register"
import Month from "./components/Month/Month"
import List from "./components/List/List"
import Profile from "./components/Profile/Profile"
import Adder from "./components/Adder/Adder"

export default (
  <Switch>
    <Route exact path='/' component={Auth} />
    <Route exact path='/register' component={Register} />
    <Route path='/calendar' component={Month} />
    <Route path='/list' component={List} />
    <Route path='/profiles/:plantid' component={Profile} />
    <Route path='/newplant' component={Adder} />
  </Switch>
)
