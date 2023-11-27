import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/type/";

function Poketypes() {
  const [type, setType] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then(({ data }) => setType(data));
  }, []);

  if (!type.results) return <p>cargando...</p>;

  console.log(type.results);

  // const arr = [<p>hola</p>, <p>asdfsadfsdafadios</p>];

  return (
    <>
      {type.results.map((type) => (
        <Text>{type.name}</Text>
      ))}
    </>
  );
}

export default Poketypes;
