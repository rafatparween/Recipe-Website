"use client";
import { createContext, useState, useContext } from 'react';
const CartContext = createContext();

// C
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
