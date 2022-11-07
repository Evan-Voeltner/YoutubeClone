import React from "react";
import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../components/Comment/Comment.css";



const Comments = () => {
  const comment = useInput("");

  const dispatch = useDispatch();
  const { data: user } = useSelector((state) => state.user);
  const { id: videoId, comments } = useSelector((state) => state.video.data);

  const handleAddComment = async (e) => {
    if (e.keyCode === 13) {
      e.target.blur();

      if (!comment.value.trim()) {
        return toast.error("Please write a comment");
      }

      dispatch(addComment(data));
      comment.setValue("");
    }
  };

  return (
    <Wrapper>
      <h3>{comments?.length} comments</h3>

      <div className="add-comment">
        <img src={user.avatar} alt="avatar" />
        <textarea
          placeholder="Add a public comment"
          value={comment.value}
          onKeyDown={handleAddComment}
          onChange={comment.onChange}
        />
      </div>

      {comments &&
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <Link to={`/channel/${comment.User?.id}`}>
              <img src={comment.User?.avatar} alt="avatar" />
            </Link>
            <div className="comment-info">
              <p className="secondary">
                <span>
                  <Link to={`/channel/${comment.User?.id}`}>
                    {comment.User?.username}
                  </Link>
                </span>
                <span style={{ marginLeft: "0.6rem" }}>
                  {timeSince(comment.createdAt)} ago
                </span>
              </p>
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
    </Wrapper>
  );
};

export default Comments;