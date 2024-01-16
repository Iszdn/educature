import React from 'react'
import "./index.scss"
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
const CardFaculty = () => {
  return (
    <div className='card-facul'>
<div className="content">
    <div className="image">
        <img src="https://preview.colorlib.com/theme/educature/img/faculty/f1.jpg" alt="" />
    </div>
    <div className="info">
        <h4>Ethel Davis</h4>
        <h6>Sr. Faculty Data Science</h6>
        <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price.</p>
        <div className="sosials">
            <span><FaFacebookF /></span>
            <span><CiTwitter /></span>
            <span><FaLinkedinIn /></span>
        </div>
    </div>
</div>
    </div>
  )
}

export default CardFaculty