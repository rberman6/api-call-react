"use client";

import React, { useState, useEffect } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const [query, setQuery] = useState("ditto");

  async function fetchPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;

    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    setPokemon(data);
  }
  useEffect(() => {
    fetchPokemon();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    fetchPokemon();
  }

  return (
    <div className="pokemon-container">
      <h3>Pokemon</h3>
      <p>
        Here's a pokemon api:
        <a href="https://pokeapi.co/api/v2/pokemon/ditto">
          https://pokeapi.co/api/v2/pokemon/ditto
        </a>
      </p>
      <p>
        You have to replace the text "ditto" with the name of the pokemon you
        want to search for.
      </p>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter pokemon name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="pokemon-data">
        <p>{pokemon.name}</p>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      </div>
      <hr />
    </div>
  );
}
