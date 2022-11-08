import React from "react";
import "../../components/Comment/Comment.css";

const Comment = (props) => {
  return (
    <div>
      {console.log('From comment component',props.newComment)}
      <h2>{props.newComment.user.username}</h2>
      <h5>{props.newComment.text}</h5>
    </div>
  );
};

export default Comment;
