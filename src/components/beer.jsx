"use client";

import React, { useState, useEffect } from "react";

export default function Beer() {
  const [beerData, setBeerData] = useState([]);
  const [selection, setSelection] = useState({});

  async function fetchBeer() {
    const url = "https://random-data-api.com/api/v2/beers?size=20";

    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setBeerData(data);
  }

  useEffect(() => {
    fetchBeer();
  }, []);

  function handleChange(e) {
    for (let i = 0; i < beerData.length; i++) {
      if (beerData[i].name === e.target.value) {
        console.log("beerObj", beerData[i]);
        setSelection(beerData[i]);
      }
    }
  }
  return (
    <div className="beer-container">
      <h3>Beer</h3>
      <p>
        Here's an API to fetch 20 beers:
        <a href="https://random-data-api.com/api/v2/beers?size=20">
          https://random-data-api.com/api/v2/beers?size=20
        </a>
      </p>
      <label htmlFor="">Choose your favourite beer</label>
      <select id="" name="" value={selection} onChange={(e) => handleChange(e)}>
        <option value="">Please select</option>
        {beerData.map((beer) => {
          return (
            <option key={beer.uid} value={beer.name}>
              {beer.name}
            </option>
          );
        })}
      </select>
      {selection.name ? (
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <th>uid</th>
              <th>brand</th>
              <th>name</th>
              <th>style</th>
              <th>hope</th>
              <th>yeast</th>
              <th>malts</th>
              <th>ibu</th>
              <th>alcohol</th>
              <th>blg</th>
            </tr>
            <tr>
              <td>{selection.id}</td>
              <td>{selection.uid}</td>
              <td>{selection.brand}</td>
              <td>{selection.name}</td>
              <td>{selection.style}</td>
              <td>{selection.hope}</td>
              <td>{selection.yeast}</td>
              <td>{selection.malts}</td>
              <td>{selection.ibu}</td>
              <td>{selection.alcohol}</td>
              <td>{selection.blg}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        ""
      )}
      <hr />
    </div>
  );
}
