import React from "react";

export default function Random(props) {
  return (
    <>
      <div className="randomMovie">
        <h2 className="title">{props.movieData.title}</h2>
        <span className="movieData">
          {props.movieData.overview.substring(0, 250)}...
        </span>

        <img
          className="moviePoster"
          src={props.movieData.poster}
          alt="Movie poster"
        />
        <button className="randomButton" onClick={props.randomNumber}>
          Randomize
        </button>
      </div>
    </>
  );
}
