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

const Home = () => {
  const [data, setData] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");
  const [showAlbums, setShowAlbums] = useState(false);

  useEffect(() => {
    if (showAlbums) {
      getData().then(function (json) {
        let filteredData = json;

        if (selectedSource !== "") {
          filteredData = json.filter(
            (album) => album.source === selectedSource
          );
        }

        setData(filteredData);
      });
    }
  }, [selectedSource, showAlbums]);

  const handleSourceChange = (e) => {
    setSelectedSource(e.target.value);
  };

  return (
    <div id="home-container">
      {!showAlbums && (
        <button type="button" onClick={(e) => setShowAlbums(true)}>
          GET ALBUMS
        </button>
      )}
      {showAlbums && (
        <div id="albums-page">
          <div className="filter-list">
            <label for="source">Filter by:</label>

            <select name="source" id="source" onChange={handleSourceChange}>
              <option value="">All</option>
              <option value="LOCAL">Local</option>
              <option value="QOBUZ">Qobuz</option>
            </select>
          </div>

          <div className="albums-list">
            {data &&
              data.length > 0 &&
              data.map((album) => (
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
        </div>
      )}
    </div>
  );
};

export default Home;
