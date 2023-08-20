import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);
//create somewhere to keep track of states that need to be accessed everywhere

const getDefaultCart = () => {
	let cart = {}
	for (let i = 1; i <PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
}

export const ShopContextProvider = (props) => {
		const [cartItems, setCartItems] = useState(getDefaultCart());
		console.log(cartItems);

		const addToCart = (itemID) => {
			setCartItems((prev) => ({...prev, [itemID] : prev[itemID] + 1}));
			//adding one more value to the item id
		};

		const removeFromCart = (itemID) => {
			setCartItems((prev) => ({...prev, [itemID] : prev[itemID] - 1}));
			//removing one more value from the item id
		};

		const contextValue = {cartItems, addToCart, removeFromCart}
		//object to pass in functions and values to access

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
}
