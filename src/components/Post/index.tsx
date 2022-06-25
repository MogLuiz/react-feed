import React from "react";

import styles from "./styles.module.css";

type TPostProps = {
  author: string;
  content: string;
};

const Post = ({ author, content }: TPostProps) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/58401291?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Luiz Ramos</strong>
            <span>Frontend Engineer</span>
          </div>
        </div>

        <time dateTime="2022-05-22">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#"> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Escreva um comentário..." />

        <button type="submit">Comentar</button>
      </form>
    </article>
  );
};

export default Post;
