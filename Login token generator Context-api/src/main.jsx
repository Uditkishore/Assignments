import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "./Context/AuthContext";
import ToggleContextProvider from "./Context/ToggleContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ToggleContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ToggleContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
