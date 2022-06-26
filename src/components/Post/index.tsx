import { FormEvent, useState } from "react";

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
  const [comments, setComments] = useState(["Esse post ficou demais!"]);

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

  const handleCreateNewComment = (event: any) => {
    event.preventDefault();

    const newCommentText = event.target.comment.value;

    setComments([...comments, newCommentText]);

    event.target.comment.value = ''
  };
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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea name="comment" placeholder="Escreva um comentário..." />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment content={comment} />
        ))}
      </div>
    </article>
  );
};

export type PostType = TPostProps;
export default Post;
