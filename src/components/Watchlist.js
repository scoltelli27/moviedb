import React, { useState, useEffect } from "react";

export default function Watchlist(props) {
  return (
    <>
      <div className="watchList">
        <h3>To watch: {props.movieData.title}</h3>
      </div>
    </>
  );
}
