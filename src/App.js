import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Random from "./components/Random";
import Watchlist from "./components/Watchlist";
import Spinner from "./components/Spinner";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";

function App() {
  // Spinner state
  const [isLoading, setIsLoading] = useState(false);

  //Movie Data states
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
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=53bdb2a3faf53552f09348f942d242c9`
    )
      .then((res) => res.json())
      .then((data) => {
        if (
          data.adult === false &&
          data.original_language === "en" &&
          data.poster_path &&
          data.vote_count > 150
        ) {
          setMovieData({
            title: data.title,
            overview: data.overview,
            poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          });
          setIsLoading(false);
        } else {
          randomNumber();
        }
      });
  }, [randomMovie]);

  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        {isLoading && <Overlay />}
        {isLoading && <Spinner />}
        <Random movieData={movieData} randomNumber={randomNumber} />
        <Watchlist movieData={movieData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
