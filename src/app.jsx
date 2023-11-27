import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar";

import Pokedex from "./components/pokeCard/pokedex";

function App() {
  return (
    <ChakraProvider>
      <Navbar title="Pokedex" search="Buscador" />
      <Pokedex />
    </ChakraProvider>
  );
}

export default App;
