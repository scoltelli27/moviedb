import React from "react";

export default function Random(props) {
  return (
    <>
      <div className="randomMovie">
        <h2>{props.movieData.title}</h2>
        <span>{props.movieData.overview.substring(0, 250)}...</span>

        <img
          className="moviePoster"
          src={props.movieData.poster}
          alt="Movie poster"
        />
        <button className="randomButton" onClick={props.randomNumber}>
          Get a random movie
        </button>
      </div>
    </>
  );
}
