import { useEffect, useState } from "react";
import Album from "../../components/Album";
import "./style.css";

const getData = () => {
  return fetch("albums.json").then((response) => response.json());
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
        <div className="albums-page">
          <div className="filter-list">
            <label htmlFor="source">Filter by:</label>

            <select name="source" id="source" onChange={handleSourceChange}>
              <option value="">All</option>
              <option value="LOCAL">Local</option>
              <option value="QOBUZ">Qobuz</option>
            </select>
          </div>

          <div className="albums-list">
            {data &&
              data.length > 0 &&
              data.map((album) => <Album key={album.id} album={album} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
