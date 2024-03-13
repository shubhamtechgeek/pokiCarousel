// Carousel.js
import React from "react";
import PokemonCard from "./pokemonCard";

const Carousel = ({ onPrevious, onNext, children }) => {
  return (
   
        <>
         <div className="carouselpoke">
         <button onClick={onPrevious}>{`<`}</button>
        <button onClick={onNext}>{`>`}</button>
         </div>
         <div>
         {children}
         </div>
        
        </>
  );
};

export default Carousel;
