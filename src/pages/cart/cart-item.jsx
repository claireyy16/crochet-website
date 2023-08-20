import React from 'react'

export const CartItem = ({ id, productName, price, productImage }) => {

  return (
    <div className='cartItem'> {""}
      <img className='productImg'src={productImage}></img>
      <div className='description'>
        <p><b> {productName} </b></p>
        <p>${price}</p>
      </div>
    </div>
  )
}
