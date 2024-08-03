import React, { createContext, useState } from "react";
import { PRODUCTS, getProductData } from "../products";

export const ShopContext = createContext(null);
//create somewhere to keep track of states that need to be accessed everywhere

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());
	console.log(cartItems);

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			/*loop through items in cartItems*/
			if (cartItems[item] > 0) {
				/*if there is one of that item in cart*/
				let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
				/* get the id of that product and convert to a number */
				totalAmount += cartItems[item] * itemInfo.price;
			}
		}

		return totalAmount;
	};


	const getTotalItems = () => {
		let totalItems = 0;
		for (const item in cartItems) {
			/*loop through items in cartItems*/
			if (cartItems[item] > 0) {
				{}

				totalItems += cartItems[item];
				{}
			}
		}
		return totalItems;
	};


	const addToCart = (itemID) => {
		setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
		//adding one more value to the item id
	};

	const removeFromCart = (itemID) => {
		setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
		//removing one more value from the item id
	};

	const updateCartItemCount = (newAmount, itemID) => {
		setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
	};

	const contextValue = {
		cartItems,
		addToCart,
		removeFromCart,
		updateCartItemCount,
		getTotalCartAmount,
		getTotalItems,
	};
	//object to pass in functions and values to access

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
