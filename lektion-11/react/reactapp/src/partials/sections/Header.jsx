import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Header