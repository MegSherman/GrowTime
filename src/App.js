import React from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import Register from './components/Register/Register';
import Nav from './components/Nav/Nav';
import Calendar from './components/Calendar/Calendar';
import List from './components/List/List';
import Profile from './components/Profile/Profile';
import Adder from './components/Adder/Adder';

function App() {
  return (
    <div className="App">
      <Auth></Auth>
      <Register></Register>
      <Nav></Nav>
      <Calendar></Calendar>
      <List></List>
      <Profile></Profile>
      <Adder></Adder>
    </div>
  );
}

export default App;
