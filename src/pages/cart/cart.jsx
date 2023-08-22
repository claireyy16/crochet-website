import React, { useContext } from 'react'
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from './cart-item';
import styles from "./cart.css";

import { useNavigate } from 'react-router';


export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount(); 

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1 className='title'>cart</h1>
      </div>
      <div className='cart'>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem id={product.id} 
            productName={product.productName} price={product.price} productImage={product.productImage}/>
          }
        })}
      </div>
      </div>
    {/* changes message based on if cart is empty */}
    { totalAmount > 0 ? 
      <div className='checkout'>
        <p>subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/shop")}> continue shopping </button>
        <button> checkout </button>
      </div>
    : <h1> start shopping! </h1>}
    </div>
  )
}
