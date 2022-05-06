import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './navbar.css';

export default function Navbar() {
  return (
    <nav id="navbar">
      <ul className="menuContainer">
        <h1 className="logo">Bookstore CMS</h1>
        <li><NavLink to="/">Book</NavLink></li>
        <li><NavLink to="/categories">Category</NavLink></li>
      </ul>
      <span id="profile-pic"><FaUserAlt className="icon" /></span>
    </nav>
  );
}
