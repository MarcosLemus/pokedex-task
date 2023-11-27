import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import Poketypes from "./poketypes";

function Pokecard() {
  return (
    <>
      <Card display="flex" width={350} height={400} mt={50}>
        <Card maxW="sm">
          <CardHeader>
            <Poketypes />
          </CardHeader>
        </Card>
        <Card>
          <CardBody>
            <h1>holaaa</h1>
          </CardBody>
        </Card>
      </Card>
    </>
  );
}

export default Pokecard;
