import { createContext, useState } from "react";

export const ThemeContext = createContext(); // Create box!

export const ThemeContextProvider = ({ children }) => {
  const [state, setState] = useState(false);

  return (
    <ThemeContext.Provider value={{ state, setState }}>
      {children}
    </ThemeContext.Provider>
  );
};
