import React, { useState } from "react";

const CommentForm = (props) => {
  const [newComment, setNewComment] = useState("");

 function handleSubmit(event){
    event.preventDefault();

 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
