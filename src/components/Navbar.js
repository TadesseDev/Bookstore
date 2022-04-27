import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
  }
  const ulStyle = {
    display: 'flex',
    gap: '10px',
    listStyle: 'none',
  }
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li><NavLink to="/">Book</NavLink></li>
        <li><NavLink to="/categories">Category</NavLink></li>
      </ul>
    </nav>
  )
}
