import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ToggleContext } from "../Context/ToggleContext";
import { useState } from "react";
import axios from "axios";

function Login() {
  const { toggleAuth, setToggleAuth } = useContext(ToggleContext);
  const [formData, setFormData] = useState({});
  const { setIsAuth } = useContext(AuthContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const AuthToken = async () => {
    axios
      .post("https://reqres.in/api/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        setIsAuth(res.data);
        setToggleAuth(!toggleAuth);
      })
      .catch((error) => {
        alert("email=> eve.holt@reqres.in & password=> cityslicka");
      });
  };

  return (
    <FormControl w="40%" margin="auto" mt="80px">
      <Heading mb="20px">Login</Heading>
      <Input
        onChange={handleChange}
        mb="20px"
        id="email"
        type="email"
        placeholder="Enter email"
      />
      <Input
        onChange={handleChange}
        mb="20px"
        id="password"
        type="password"
        placeholder="Enter Password"
      />
      <Button onClick={AuthToken} colorScheme={"yellow"}>
        Login
      </Button>
    </FormControl>
  );
}

export default Login;
