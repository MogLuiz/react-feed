import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import Avatar from "../Avatar";

import styles from "./styles.module.css";

type TCommentProps = {
  content: string;
  onDeleteComment: (comment: string) => void;
};

const Comment = ({ content, onDeleteComment }: TCommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/58401291?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Ramos</strong>

              <time dateTime="2022-05-22">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="excluir comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
