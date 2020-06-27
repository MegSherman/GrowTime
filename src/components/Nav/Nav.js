import React, { useState } from 'react'

const Nav = () => {
  const [firstName, setFirstName] = useState('')
  return (
    <>
      <div>Nav.js</div>
      <nav>Calendar</nav>
      <nav>Plant List</nav>
      <nav>Plant Profiles</nav>
      <nav>Add a Plant</nav>
    </>
  )
}
export default Nav
