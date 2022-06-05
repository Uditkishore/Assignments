import React from "react";
import { createContext } from "react";

import { useState } from "react";

export const ToggleContext = createContext();

function ToggleContextProvider({ children }) {
  const [toggleAuth, setToggleAuth] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleAuth, setToggleAuth }}>
      {children}
    </ToggleContext.Provider>
  );
}

export default ToggleContextProvider;
