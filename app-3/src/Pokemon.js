import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Pokemon = (props) => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((e) => console.error(e));
  }, [name]);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites?.front_default} />
    </div>
  );
};

export default Pokemon;
