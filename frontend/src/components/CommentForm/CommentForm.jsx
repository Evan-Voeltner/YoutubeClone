import React, { useState } from "react";

const CommentForm = (props) => {
  const [commentText, setCommentText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    let newComment = {
        video_id: props.videoId,
        text: commentText,
        likes: 0,
        dislikes: 0
    }
    console.log("New Comment", newComment);
    props.postNewComment(newComment);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentForm;
