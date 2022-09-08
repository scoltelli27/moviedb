import React, { useState, useEffect } from "react";

export default function Searchbar() {
  const [randomMovie, setRandomMovie] = useState();

  function randomNumber() {
    setRandomMovie(Math.floor(Math.random() * 500));
  }
  useEffect(() => {
    let obj;
    fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=53bdb2a3faf53552f09348f942d242c9`
    )
      .then((res) => res.json())
      .then((data) => (obj = data))
      .then(() => console.log(obj.overview));
  }, [randomMovie]);

  return (
    <>
      <div>
        <button onClick={randomNumber}>Get a random movie</button>
      </div>
      <div>
        <h2></h2>
      </div>
    </>
  );
}
