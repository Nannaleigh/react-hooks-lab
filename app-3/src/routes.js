import React from "react";
import { Routes, Route } from "react-router-dom";
import Pokemon from "./Pokemon";
import PokemonList from "./PokemonList";

export default (
  <Routes>
    <Route exact path="/" element={PokemonList} />
    <Route path="/pokemon/:name" element={Pokemon} />
  </Routes>
);
