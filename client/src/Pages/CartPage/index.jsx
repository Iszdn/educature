import React, { useContext } from 'react'
import "./index.scss"
import { BasketContext } from '../../context/BasketContext'
import { GoHeart } from "react-icons/go";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
const CartPage = () => {
  const {basket,increaseBasket,decreaseBasket,deleteBasket}=useContext(BasketContext)
  const subtotal=basket.reduce((basketTotal,basketItem)=>basketTotal+(basketItem.count*basketItem.price),0)
  
  return (
    <div className='container'>
      
        {
          basket.length===0 ? <div>Cart is empty</div> : 
          <>
          
                   <div className="row">
        {
  basket && basket.map(product=>
    <div className='card-feature col-lg-4 col-md-6 col-12'>
    <div className="content">
    <i class={product.icon}></i>
    <h4><Link to={product._id}>{product.title}</Link></h4>
    <p>{product.desc}</p>
    <p>{product.price}</p>
    <div className="icons">
      <span><GoHeart /></span>
    <div className="div">
      <button onClick={()=>increaseBasket(product)} className='btn'>+</button>
<p>{product.count}</p>
    <button onClick={()=>decreaseBasket(product)} className='btn'>-</button>
    <button onClick={()=>deleteBasket(product)} className='btn'>del</button>
    </div>
    
    </div>
    
    </div>
        </div>
  )
}    
</div>
<div className="subtotal">
  <p>subtotal:{subtotal}</p>
  <p></p>
</div> 
          </>

        }


      



    </div>
  )
}

export default CartPage