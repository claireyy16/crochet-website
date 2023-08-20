import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = ({ id, productName, price, productImage }) => {

    const {addToCart} = useContext(ShopContext);

    return (
    <div className='product'>
        <img className='prodImg' src={productImage} alt="product"/>
        <div className='prodName'>{productName}</div>

        <div className="prodDesc">
            <p className='prodDesc'>Product Description</p>
        </div>
        
        <div className='prodPrice'>${price}</div>
        <button className='addtocart' onClick ={() => addToCart(id)}>add to cart</button>
    </div>
    )
}
