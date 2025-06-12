import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import "./Player.css"; // Import the CSS file for styling
const Player = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTMyYmRhOWRiMDQ3YWFjOTM1Y2Y0OTE4ZDk4ZDUzNSIsIm5iZiI6MTc0ODMyOTIzMy43NDMsInN1YiI6IjY4MzU2MzExMjQ5ZmM5NmQ5NTczMDM5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LoQtMZ8IXN91HyfATSkQOgRSZ0Kdv2ggjZs0G9zvV7s",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
        width={"90%"}
        height={"90%"}
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        title="trailerHHwA-vEy
       "
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
