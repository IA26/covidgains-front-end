import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

  // handleLogOut() = () => {

  // }
  return(
    <ul className="nav">
      {props.token ? null :
      <li>
        <NavLink to="/">Home</NavLink>
      </li>}
      {props.token ? null :
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>}
      {props.token ? null :
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>}
      {props.token ? 
      <li>
        <NavLink to="/equipments">Equipment</NavLink>
      </li> : null}
      {props.token ? 
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li> : null}
      {props.token ?
      <li>
      <NavLink to="/logout">Logout</NavLink>
      </li> :null}
    </ul>
  )
};

export default NavBar;