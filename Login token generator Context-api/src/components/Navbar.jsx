import { Box, Button, Text, Flex, Heading, Spacer } from "@chakra-ui/react";

import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

import { ToggleContext } from "../Context/ToggleContext";

function Navbar() {
  const { toggleAuth, setToggleAuth } = useContext(ToggleContext);

  const { isAuth } = useContext(AuthContext);

  return (
    <Flex
      p="5"
      bg="red.400"
      justify={"space-around"}
      wrap={"wrap"}
      align={"center"}
    >
      <Heading>Logo</Heading>

      <Text fontSize="4xl">
        {toggleAuth ? `Token :- ${isAuth.token}` : `Token :- NA`}
      </Text>
      {toggleAuth ? (
        <Button
          onClick={() => setToggleAuth(!toggleAuth)}
          colorScheme={"yellow"}
        >
          Logout
        </Button>
      ) : (
        ""
      )}
    </Flex>
  );
}

export default Navbar;
