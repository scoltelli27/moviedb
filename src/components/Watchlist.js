import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import trash from "../trash-solid.svg";

export default function Watchlist(props) {
  const [toWatch, setToWatch] = useState(
    JSON.parse(localStorage.getItem("watch")) || []
  );

  const [currentWatchId, setCurrentWatchId] = useState(
    (toWatch[0] && toWatch[0].id) || ""
  );

  useEffect(() => {
    localStorage.setItem("watch", JSON.stringify(toWatch));
  }, [toWatch]);

  function createNewWatch() {
    const newWatch = {
      id: nanoid(),
      body: props.movieData.title,
      poster: props.movieData.poster,
      overview: props.movieData.overview,
    };

    setToWatch((prevWatch) => [newWatch, ...prevWatch]);
    setCurrentWatchId(newWatch.id);
  }

  function removeWatch(event, toWatchId) {
    event.stopPropagation();
    setToWatch((oldWatch) =>
      oldWatch.filter((toWatch) => toWatch.id !== toWatchId)
    );
  }
  return (
    <>
      <div className="watchList">
        <button className="addButton" onClick={createNewWatch}>
          Add to list
        </button>
        <div key={toWatch.id}>
          {toWatch.map((watch) => (
            <div className="movieList">
              <img
                className="smallPoster"
                src={watch.poster}
                alt="Movie poster from list"
              />
              <div className="listText">
                <h3 className="smallTitle">{watch.body}</h3>
                <span className="smallOverview">
                  {watch.overview.substring(0, 200)}...
                </span>
              </div>
              <img
                alt="Delete icon"
                src={trash}
                className="removeButton"
                onClick={(event) => removeWatch(event, watch.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
