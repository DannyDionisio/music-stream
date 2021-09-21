import { useEffect, useState } from "react";

import "./style.css";

const getData = () => {
  return fetch("albums.json").then((response) => response.json());
};

const getCover = (album) => {
  if (album.cover === null) {
    return "./images/undefined_album_cover.png";
  }
  return "./covers/" + album.cover;
};

const Albums = () => {
  const [data, setData] = useState([]);
  const [source, setSource] = useState([]);

  useEffect(() => {
    getData().then(function (myJson) {
      setData(myJson);
    });
  }, []);

  return (
    <div id="albums-page">
      <div className="filter-list">
        <label for="source">Filter by:</label>

        <select name="source" id="source">
          <option value="all">All</option>
          <option value="local">Local</option>
          <option value="Qobuz">Qobuz</option>
        </select>
      </div>

      {data &&
        data.length > 0 &&
        data.map((album, source) => (
          <div className="container">
            <img src={getCover(album)} alt="Album Cover" />
            {album.source === "QOBUZ" && (
              <img
                src={"./images/qobuz.png"}
                alt="sourceimage"
                className="qobuz"
              />
            )}
            <span>{album.album}</span>
            <p>{album.artist}</p>
          </div>
        ))}
    </div>
  );
};

export default Albums;
