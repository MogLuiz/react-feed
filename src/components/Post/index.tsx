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
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/58401291?v=4" />
          <div className={styles.authorInfo}>
            <strong>Luiz Ramos</strong>
            <span>Frontend Engineer</span>
          </div>
        </div>

        <time dateTime="2022-05-22">Publicado há 1h</time>
      </header>
    </article>
  );
};

export default Post;
