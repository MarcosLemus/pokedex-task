import { useEffect, useState } from "react";
// import Poketypes from "./poketypes";

import { Box, SimpleGrid, Card, CardBody, Text } from "@chakra-ui/react";

import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

function Pokedex() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then(({ data }) => setPokemon(data));
  }, []);

  if (!pokemon.results) return <p>cargando...</p>;

  // console.log(pokemon.results);

  const arr = [<p>hola</p>, <p>asdfsadfsdafadios</p>];

  return (
    <SimpleGrid columns={4} spacing={10}>
      {pokemon.results.map((pokemon) => (
        <Card width={350} height={400} mt={20} ml={10}>
          <CardBody>
            <Text>{pokemon.name}</Text>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default Pokedex;
