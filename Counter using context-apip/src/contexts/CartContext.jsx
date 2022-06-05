import { createContext, useState } from "react";

export const CartContext = createContext(); // Create box!

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(0);

  const handleChange = (value) => {
    setCart(cart + value);
  };

  return (
    <CartContext.Provider value={{ cart, handleChange }}>
      {children}
    </CartContext.Provider>
  );
};
// 1. set State
// 2. get state
// 3. update state
