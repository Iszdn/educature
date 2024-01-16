import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav id='navbar'>
<div className="nav">
    <div className="logo">
        <img src="https://preview.colorlib.com/theme/educature/img/logo.png.webp" alt="" />
    </div>
    <div className="navigations">

        <ul>
            <li>
                <NavLink activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/add">Add</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/pages">Pages</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/wish"><span><IoMdHeartEmpty /></span></NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/cart"><span><IoCartOutline /></span></NavLink>
            </li>
        </ul>
    </div>
</div>
    </nav>
  )
}

export default Navbar