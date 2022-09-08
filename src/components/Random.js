import React, { useState, useEffect } from "react";
import App from "../App";

export default function Random(props) {
  return (
    <>
      <div>
        <button onClick={props.randomNumber}>Get a random movie</button>
        <h2>{props.movieData.title}</h2>
        <span>{props.movieData.overview}</span>

        <img
          className="moviePoster"
          src={props.movieData.poster}
          alt="Movie poster"
        />
      </div>
    </>
  );
}
