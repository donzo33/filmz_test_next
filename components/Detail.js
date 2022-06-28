import styles from "../styles/Detail.module.css";

import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export default function Detail(props) {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/+" +
          props.id +
          "?api_key=" +
          apiKey +
          "&language=en-US"
      )

      .catch((err) => console.log(err))
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div
      onClick={() => {
        console.log(data);
      }}
      className={styles.container}
    >
      {data ? (
        <ul>
          <li> producteur : {data.production_companies[0].name}</li>
          <li> revenu : {data.revenue} dollars</li>
        </ul>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
