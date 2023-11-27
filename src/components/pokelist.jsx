import { useEffect, useState, SimpleGrid } from "react";
import Card from "./cards";
import Pokecard from "./pokeCard/pokeCard";

import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

function Pokelist() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then(({ data }) =>
      setPokemon(
        data.map((item) => ({
          id: item.id,
          name: item.name,
          type: item.type,
        }))
      )
    );
  }, []);
  return (
    <div>
      <SimpleGrid columns={4} spacing={5} py={4}>
        <Card />
      </SimpleGrid>
    </div>
  );
}

export default Pokelist;
