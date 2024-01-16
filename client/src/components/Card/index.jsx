import React, { useContext } from 'react'
import { GoHeart } from "react-icons/go";
import { PiShoppingCartThin } from "react-icons/pi";
import "./index.scss"
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BasketContext } from '../../context/BasketContext';
import { WishlistContext } from '../../context/WishlistContext';
const Card = (product) => {
  const {addBasket}=useContext(BasketContext)
  const {addWish,wish}=useContext(WishlistContext)
  return (
    <div className='card-feature'>
<div className="content">
<i class={product.icon}></i>
<h4><Link to={product._id}>{product.title}</Link></h4>
<p>{product.desc}</p>
<div className="icons">
  <span onClick={()=>addWish(product)}>
  {
    wish.some(item=>item._id===product._id) ? <FaHeart />  : <GoHeart />
  }
 </span>
<span onClick={()=>addBasket(product)}><PiShoppingCartThin /></span>
</div>

</div>
    </div>
  )
}

export default Card