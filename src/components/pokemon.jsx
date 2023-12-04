"use client";

import React, { useState, useEffect } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);

  async function fetchPokemon() {
    const url1 = "https://pokeapi.co/api/v2/pokemon/?limit=1292";

    const response = await fetch(url1);
    //   return console.log(response);
    const data = await response.json();
    // const images = data.data.memes;
    //   const image = data.sprites.front_default;

    const pokemonArr = data.results;
    setPokemon(pokemonArr);
    return console.log(pokemon);
    //   const name = data.results.name;
    //   return console.log(name);

    //   const response2 = await fetch(url2);
    //   const data2 = await response2.json();
    //   const image = data2.sprites.front_default;
    // return console.log(url2[1000].name);
    // function handleClick() {
    //   console.log("click");
  }
  useEffect(() => {
    fetchPokemon();
  }, []);
}
//   return (
//     <div className="pokemon-container">
//       <form action="">
//         <input type="text" placeholder="Enter pokemon name" value={onChange} />
//         <button onClick={handleClick}>Search</button>
//       </form>
//       {/* <p>{name}</p> */}
//       {/* <img src={image} /> */}
//     </div>
//   );
