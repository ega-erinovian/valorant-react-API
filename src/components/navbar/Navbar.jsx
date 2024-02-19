import React from 'react'
import { Logo } from "../../assets";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check"/>
      <div className="nav-header">
        <a href='/' className="nav-title">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    
      <div className="nav-links">
        <a href='/'>Agents</a>
        <a href='/'>Maps</a>
        <a href='/'>Weapon</a>
        <a href='/'>About</a>
      </div>
    </div>
  )
}

export default Navbar