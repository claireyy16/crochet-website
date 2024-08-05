import React, { useContext } from 'react';
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({ id, productName, price, productImage }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);


  return (
    <div className='cartItem'> {""}
      <img className='productImg'src={productImage} alt=''></img>
      <div className='description'>
        <p><b> {productName} </b></p>
        <p>${price}</p>
        <div className='countHandler'>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input 
            value={cartItems[id]} 
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
        <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  )
}
