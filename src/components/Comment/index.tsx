import { ThumbsUp, Trash } from "phosphor-react";

import Avatar from "../Avatar";

import styles from "./styles.module.css";

type TCommentProps = {
  content: string
}

const Comment = ({ content }:TCommentProps) => {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        imageSrc="https://avatars.githubusercontent.com/u/58401291?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Ramos</strong>

              <time dateTime="2022-05-22">Cerca de 1h atrás</time>
            </div>

            <button title="excluir comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
