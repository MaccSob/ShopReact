import React from "react";
import './Cart.css';
import { createContext, useState, useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa";


const [cartItems, setCartItems] = useState([])

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
}
const Cart = () => {
    
    return (
        <>

        <h2>No items in your cart.</h2>
        </>
    )
}



export default Cart;