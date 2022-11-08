import React, { useState } from "react";
import Comment from "../Comment/Comment";

const CommentList = (props) => {
  return (
    <div>
      {props.videoComments.map((currentComment) => {
        console.log("From comment list", currentComment);
        return <Comment newComment={currentComment} />;
      })}
    </div>
  );
};

export default CommentList;
