import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAnimes } from "../../services/animes.js";

function Home(props) {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const animes = await getAnimes();
      setAnimes(animes);
    };
    fetchAnimes();
  }, []);
  return (
    <div>
      {animes.map((anime) => (
        <div>{anime.title}</div>
      ))}
    </div>
  );
}

export default Home;
