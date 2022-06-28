import styles from "../styles/List.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = process.env.API_KEY;

export default function List(props) {
  const [session, setSession] = useState();
  const [list, setList] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=" +
          apiKey
      )
      .catch((err) => console.log(err))
      .then((res) => {
        setSession(res.data.guest_session_id);
      });

    axios({
      method: "post",
      url: "https://api.themoviedb.org/3/" + session + "?api_key=" + apiKey,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        name: "My list ",
        description: "Just an awesome list dawg.",
        language: "en",
      },
    })
      .catch((err) => console.log(err))
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <div className={styles.container}>
      <h2>My list :</h2>
    </div>
  );
}
