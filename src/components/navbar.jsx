import React from "react";
import { chakra, Flex } from "@chakra-ui/react";

function Navbar({ title }) {
  return (
    <>
      <chakra.div
        display="flex"
        flexDirection="column"
        bg="red.500"
        color="white"
        p={4}
        boxShadow="md"
      >
        <chakra.div>
          <chakra.h1 fontSize={30} mb={1}>
            {title}
          </chakra.h1>
        </chakra.div>
        <chakra.div display="flex">
          <Flex>
            <chakra.input
              type="text"
              placeholder="    Search"
              color="black"
              size={200}
              ml={5}
              borderRadius={10}
            />
          </Flex>
        </chakra.div>
      </chakra.div>
    </>
  );
}

export default Navbar;
