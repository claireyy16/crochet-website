import React, { useContext } from 'react'
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from './cart-item';
import { ShopContextProvider } from '../../context/shop-context';
//import styles from "./cart.css";

import { useNavigate } from 'react-router';


export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount(); 
  const cart = useContext(ShopContextProvider);

  const navigate = useNavigate();

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cart.items})
    }) .then((response) => {
        return response.json();
    }) .then((response) => {
        if(response.url) {
            window.location.assign(response.url); //forwarding user to stripe site
        }
    })
}

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
          return true;
        })}
      </div>
      </div>
    {/* changes message based on if cart is empty */}
    { totalAmount > 0 ? 
      <div className='checkout'>
        <p>subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/shop")}> continue shopping </button>
        <button onClick={checkout}> checkout </button>
      </div>
    : <h1> start shopping! </h1>}
    </div>
  )
}
