import React, { useContext } from 'react'
import "./index.scss"
import { BasketContext } from '../../context/BasketContext'
import { GoHeart } from "react-icons/go";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../context/WishlistContext';
import { IoHeartDislikeOutline } from "react-icons/io5";
const WishPage = () => {
  const {addBasket}=useContext(BasketContext)
  const {wish,deleteWish}=useContext(WishlistContext)
  
  return (
    <div className='container'>
      
        {
          wish.length===0 ? <div>wishlist is empty</div> : 
          <>
          
                   <div className="row">
        {
  wish && wish.map(product=>
    <div className='card-feature col-lg-4 col-md-6 col-12'>
    <div className="content">
    <i class={product.icon}></i>
    <h4><Link to={product._id}>{product.title}</Link></h4>
    <p>{product.desc}</p>
    <p>{product.price}</p>
    <div className="icons">
      <span onClick={()=>deleteWish(product)}><IoHeartDislikeOutline /></span>
    <div className="div">
    <span onClick={()=>addBasket(product)}><PiShoppingCartThin /></span>
    </div>
    
    </div>
    
    </div>
        </div>
  )
}    
</div>

          </>

        }


      



    </div>
  )
}

export default WishPage