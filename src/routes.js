import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Register from './components/Register/Register'
// import Month from './components/Month/Month'
import Selected from './components/Selected/Selected'
import Unselected from './components/Unselected/Unselected'
import Profile from './components/Profile/Profile'
import Database from './components/Database/Database'

export default (
  <Switch>
    <Route exact path='/' component={Auth} />
    <Route exact path='/register' component={Register} />
    {/* <Route path='/calendar' component={Month} /> */}
    <Route path='/plantlist' component={Selected} />
    <Route path='/addplant' component={Unselected} />
    <Route path='/profiles/:plantid' component={Profile} />
    <Route path='/database' component={Database} />
  </Switch>
)
