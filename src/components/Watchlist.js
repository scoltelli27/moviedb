import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
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
        <button className="randomButton" onClick={createNewWatch}>
          Add to list
        </button>
        <div className="movieList" key={toWatch.id}>
          <h1>
            {toWatch.map((watch) => (
              <>
                <img
                  className="smallPoster"
                  src={watch.poster}
                  alt="Movie poster"
                />
                <div>{watch.body}</div>

                <button
                  className="randomButton"
                  onClick={(event) => removeWatch(event, watch.id)}
                >
                  Remove
                </button>
              </>
            ))}
          </h1>
        </div>
      </div>
    </>
  );
}
