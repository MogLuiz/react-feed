import Avatar from "../Avatar";
import Comment from "../Comment";

import { format, formatDistanceToNow } from "date-fns";

import { TAuthor, TContentPost } from "./types";

import styles from "./styles.module.css";
import { ptBR } from "date-fns/locale";

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
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
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

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ content, type }: TContentPost) => {
          if (type === "paragraph") return <p>{content}</p>;
          if (type === "link")
            return (
              <p>
                <a href="#">{content}</a>
              </p>
            );
        })}
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
