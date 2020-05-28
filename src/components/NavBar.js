import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

  let handleLogoutNav = (e) => {
    props.handleLogout()
  }
  // console.log(props)
  return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      {props.token ? null :
      <li className="nav-item">
        <NavLink to="/" className="nav-link" activeClassName="" >Home</NavLink>
      </li>}
      {props.token ? null :
      <li className="nav-item">
        <NavLink to="/login" className="nav-link" >Login</NavLink>
      </li>}
      {props.token ? null :
      <li className="nav-item" >
        <NavLink to="/register" className="nav-link">Register</NavLink>
      </li>}
      {props.token ? 
      <li className="nav-item">
        <NavLink to="/equipments" className="nav-link">Equipment</NavLink>
      </li> : null}
      {props.token ? 
      <li className="nav-item">
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
      </li> : null}
      {props.token ?
      <li className="nav-item">
      <NavLink to="/" activeClassName="" onClick={handleLogoutNav} className="nav-link">Logout</NavLink>
      </li> :null}
    </ul>
    </div>
  </nav>
  )
};

export default NavBar;