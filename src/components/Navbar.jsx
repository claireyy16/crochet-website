//this is jsx to show that it is a react component

import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useContext } from 'react';
import { ShopContext } from "../context/shop-context";
//import { useState } from 'react';
//import { House } from "phosphor-react";
import "./navbar.css"
import "../App.css"

export const Navbar = () => {

    const { getTotalItems } = useContext(ShopContext);
    const totalItems = getTotalItems();

    //add useState for menu toggle

    return (
        <div className="navbar">
            <div className="links">
            <Link className="navLink" id="homeLink" to="/"> 
                home
            </Link>
            <Link className="navLink" id="shopLink" to="/shop">shop</Link>
            <Link className="navLink" id="flowerLink" to="/flowers">flowers</Link>
            <Link className="navLink" id="cartLink" to="/cart">
                <ShoppingCart id="cartIcon"></ShoppingCart> ({totalItems}) 
            </Link>
            </div>
        </div>
    )
};