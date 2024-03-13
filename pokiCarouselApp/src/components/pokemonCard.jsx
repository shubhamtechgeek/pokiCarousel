// PokemonCard.js
import React from "react";
import "../index.css"

const PokemonCard = ({ loading, error, data }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return null;
  }


  return (
    <div className="poke">
        <div className="poke-child">
        <h1>{data.name}</h1>
      <img className="scaleImage" src={data.sprites.front_shiny} alt={data.name} />
        </div>
     
    </div>
  );
};

export default PokemonCard;
