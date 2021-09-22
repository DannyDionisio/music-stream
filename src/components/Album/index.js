const getCover = (album) => {
  if (album.cover === null) {
    return "./images/undefined_album_cover.png";
  }
  return "./covers/" + album.cover;
};

const Album = ({ album }) => {
  return (
    <div className="album-container">
      <img src={getCover(album)} alt="Album Cover" />
      {album.source === "QOBUZ" && (
        <img src={"./images/qobuz.png"} alt="sourceimage" className="qobuz" />
      )}
      <span>{album.album}</span>
      <p>{album.artist}</p>
    </div>
  );
};

export default Album;
