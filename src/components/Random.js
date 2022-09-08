import React, { useState, useEffect } from "react";

export default function Random() {
  const [randomMovie, setRandomMovie] = useState();
  const [movieData, setMovieData] = useState({
    title: "",
    overview: "",
    poster: "",
  });

  //Get random number
  function randomNumber() {
    setRandomMovie(Math.floor(Math.random() * 803033));
  }

  // useEffect to fetch the API data and store it in state
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=53bdb2a3faf53552f09348f942d242c9`
    )
      .then((res) => res.json())
      .then((data) => {
        if (
          data.adult === false &&
          data.original_language === "en" &&
          data.poster_path
        ) {
          console.log(data);
          setMovieData({
            title: data.title,
            overview: data.overview,
            poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          });
        } else {
          randomNumber();
        }
      });
  }, [randomMovie]);

  return (
    <>
      <div>
        <button onClick={randomNumber}>Get a random movie</button>
        <h2>{movieData.title}</h2>
        <span>{movieData.overview}</span>

        <img
          className="moviePoster"
          src={movieData.poster}
          alt="Movie poster"
        />
      </div>
    </>
  );
}
