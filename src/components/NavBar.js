import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {

  // handleLogOut() = () => {

  // }

  return(
    <ul className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li> 
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/equipments">Equipment</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </ul>
  )
};

export default NavBar;