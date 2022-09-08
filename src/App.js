import "./App.css";
import Header from "./components/Header";
import Random from "./components/Random";
import React, { useState, useEffect } from "react";

function App() {
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
    <div className="App">
      <Header />
      <Random movieData={movieData} randomNumber={randomNumber} />
    </div>
  );
}

export default App;
