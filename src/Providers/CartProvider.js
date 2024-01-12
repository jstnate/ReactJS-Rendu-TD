import React, { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setTotal(cart.length);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
