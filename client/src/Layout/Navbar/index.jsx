import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from 'react';
import { WishlistContext } from '../../context/WishlistContext';
import { BasketContext } from '../../context/BasketContext';

const Navbar = () => {
    const {wish}=useContext(WishlistContext)
    const {basket}=useContext(BasketContext)
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
                <NavLink activeClassName="active" to="/wish"><span><IoMdHeartEmpty /></span>{
                wish.length!==0  ?  <span className='wishLo'>{wish.length}</span> : <span></span> 
                }</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/cart"><span><IoCartOutline /></span>
                { wish.length!==0  ? <span className='wishLo'>{basket.length}</span>   : <span></span> 
}</NavLink>
            </li>
        </ul>
    </div>
</div>
    </nav>
  )
}

export default Navbar