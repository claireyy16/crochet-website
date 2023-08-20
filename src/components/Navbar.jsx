//this is jsx to show that it is a react component

import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
//import { House } from "phosphor-react";
import "./navbar.css"
import "../App.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
            <Link className="navLink" id="homeLink" to="/"> 
                home
            </Link>
            <Link className="navLink" id="shopLink" to="/shop">shop</Link>
            <Link className="navLink" id="flowerLink" to="/flowers">flowers</Link>
            <Link className="navLink" id="cartLink" to="/cart">
                <ShoppingCart></ShoppingCart>
            </Link>
            </div>
        </div>
    )
};