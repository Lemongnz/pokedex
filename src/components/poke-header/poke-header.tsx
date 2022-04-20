import { useEffect, useState } from "react";
import { getPaginated } from "../../services/pokedex.service";
import PokeCard from "../poke-card/poke-card";
import { Container } from "./styles";

function PokeHeader() {
  return (
    <Container>
      <h1>POKEDEX</h1>
    </Container>
  );
}

export default PokeHeader;
