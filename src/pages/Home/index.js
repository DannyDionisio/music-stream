import { useHistory } from "react-router";
import "./style.css";

const Home = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/albums");
  };

  return (
    <div id="home-container">
      <button type="button" onClick={handleClick}>
        GET ALBUMS
      </button>
      ;
    </div>
  );
};

export default Home;
