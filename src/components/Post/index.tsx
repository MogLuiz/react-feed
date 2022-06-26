import Avatar from "../Avatar";
import Comment from "../Comment";

import { TAuthor, TContentPost } from "./types";

import styles from "./styles.module.css";

type TPostProps = {
  id: number;
  author: TAuthor;
  publishedAt: Date;
  content: Array<TContentPost>;
};

const Post = ({
  author: { avatarUrl, name, role },
  content,
  publishedAt,
}: TPostProps) => {
  const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imageSrc={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time dateTime="2022-05-22">{publishedDateFormatted}</time>
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

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};

export type PostType = TPostProps;
export default Post;
