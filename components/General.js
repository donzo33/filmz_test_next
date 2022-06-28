import { useState } from "react";
import styles from "../styles/General.module.css";

import Detail from "./Detail";
import List from "./List";

export default function General(props) {
  const imgPath = "https://image.tmdb.org/t/p/w500/";

  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState(null);

  return (
    <div className={styles.container}>
      <div style={{ textAlign: "center" }}>
        <h1>Hello to filmz !</h1>
      </div>
      {/* Movies */}
      <div className={styles.lists}>
        {props.movie ? (
          props.movie.map((x) => (
            <div key={x.id} className={styles.items}>
              <img src={imgPath + x.poster_path} className={styles.picture} />

              <div className={styles.infos}>
                <ul>
                  <li>titre: {x.original_title}</li>
                  <li>résumé: {x.overview}</li>
                  {/* <li>auteurs</li>
                  <li>genre </li> */}
                  <li>langue :{x.original_language} </li>
                  <li> note : {x.vote_average}</li>

                  <button
                    onClick={() => {
                      setId(x.id);
                      console.log(x.id);
                    }}
                  >
                    Add to my list
                  </button>
                  <Detail id={x.id} />
                </ul>
              </div>
            </div>
          ))
        ) : (
          <h1>LOADING...</h1>
        )}
        {/*  */}

        <div>
          <h2>List of series</h2>
        </div>

        {/* Series */}
        {props.series ? (
          props.series.map((x) => (
            <div key={x.id} className={styles.items}>
              <img src={imgPath + x.poster_path} className={styles.picture} />
              <div className={styles.infos}>
                <ul>
                  <li>titre: {x.original_title}</li>
                  <li>résumé: {x.overview}</li>
                  {/* <li>auteurs</li>
                  <li>genre </li> */}
                  <li>langue :{x.original_language} </li>
                  <li> note : {x.vote_average}</li>
                </ul>
                <button
                  onClick={() => {
                    setId(x.id);
                    console.log(x.id);
                  }}
                >
                  Add to my list
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>LOADING...</h1>
        )}
        {/*  */}
        <List id={id} />
      </div>
    </div>
  );
}
