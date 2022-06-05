import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Button = () => {
  const { handleChange } = useContext(CartContext);
  const { state, setState } = useContext(ThemeContext);
  console.log(state);
  return (
    <>
      <button onClick={() => handleChange(1)}>Add to Cart</button>
     
  
    </>
  );
};
