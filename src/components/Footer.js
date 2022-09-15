import React from "react";
import tmdb from "../tmdb.svg";

export default function Footer() {
  return (
    <span className="footer">
      <img src={tmdb} className="tmdblogo" />
      This product uses the TMDB API but is not endorsed or certified by TMDB.
    </span>
  );
}
