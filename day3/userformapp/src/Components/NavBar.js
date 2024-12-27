import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar({ Name, ID }) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={`/contacts/${Name}/${ID}`}> Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/userlist">User List</NavLink>
        </li>
        <li>
          <NavLink to="/usercrud">User Crud</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
