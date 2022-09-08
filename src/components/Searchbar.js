import React, { useState, useEffect } from "react";

export default function Searchbar() {
  const [randomMovie, setRandomMovie] = useState();
  const [movieData, setMovieData] = useState({
    title: "",
    overview: "",
    poster: "",
  });
  function randomNumber() {
    setRandomMovie(Math.floor(Math.random() * 803033));
  }
  useEffect(() => {
    let obj;
    fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=53bdb2a3faf53552f09348f942d242c9`
    )
      .then((res) => res.json())
      .then((data) =>
        setMovieData({
          title: data.title,
          overview: data.overview,
          poster: data.poster_path,
        })
      );
  }, [randomMovie]);

  return (
    <>
      <div>
        <button onClick={randomNumber}>Get a random movie</button>
        <h2>{movieData.title}</h2>
        <span>{movieData.overview}</span>
        <img url={movieData.poster} />
      </div>
    </>
  );
}
