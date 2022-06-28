import General from "../components/General";
import List from "../components/List";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.API_KEY;

export default function Home() {
  const [movie, setMovie] = useState();
  const [serie, setSeries] = useState();

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey)
      .catch((err) => console.log(err))
      .then((res) => {
        setMovie(res.data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/tv/popular?api_key=" + apiKey)
      .catch((err) => console.log(err))
      .then((res) => {
        setSeries(res.data.results);
      });
  }, []);

  return (
    <div className={styles.container}>
      <General movie={movie} series={serie} />
    </div>
  );
}
