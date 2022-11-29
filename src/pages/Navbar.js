import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../Assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar has-background-info" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
      <a target="_blank" href="https://citylab.itb.ac.id/pikkc/" style={{ textDecoration: "none " }}>
        <img src={Logo} width="150" height="28" alt="logo"/>
      </a>        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">   
        <div className="navbar-end">
          <div className="navbar-item">
            <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link has-text-black">
              Admin
            </a>
            <div class="navbar-dropdown is-center">
              <a href="/dashboard/profil" class="navbar-item ">
                Profile
              </a>
              <a href="#" class="navbar-item">Settings</a>
              <hr class="navbar-divider" />
              <a href="/login" class="navbar-item">Log Out</a>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar