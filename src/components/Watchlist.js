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
    };

    setToWatch((prevWatch) => [newWatch, ...prevWatch]);
    setCurrentWatchId(newWatch.id);
  }

  return (
    <>
      <div>
        <button onClick={createNewWatch}>
          Add to watch: {props.movieData.title}
        </button>
        <div className="watchList" key={toWatch.id}>
          <h1>
            {toWatch.map((watch) => (
              <div>{watch.body}</div>
            ))}
          </h1>
        </div>
      </div>
    </>
  );
}
