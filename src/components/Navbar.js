import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav id="navbar">
      <ul className="menuContainer">
        <span className="logo">Bookstore CMS</span>
        <li><NavLink to="/">Book</NavLink></li>
        <li><NavLink to="/categories">Category</NavLink></li>
      </ul>
      <span id="profilePic" />
    </nav>
  );
}
