import React from "react";

type TPostProps = {
  author: string;
  content: string;
};

const Post = ({ author, content }: TPostProps) => {
  return (
    <div>
        <strong>{author}</strong>
        <p>{content}</p>
    </div>
  )
};

export default Post;
