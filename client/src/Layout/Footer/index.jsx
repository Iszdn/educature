import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import "./index.scss"

const Footer = () => {
  return (
    <footer>
      <div className="container">
         <div className="foot">
        <p>Copyright ©2024 All rights reserved | This template is made with <FaRegHeart /> by Colorlib</p>
        <div className="sosials">
          <span><FaFacebookF /></span>
          <span><FaTwitter /></span>
          <span><CiBasketball /></span>
          <span><FaBehance /></span>
        </div>
      </div>
      </div>
     
    </footer>
  )
}

export default Footer