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

  // const comment = useInput("");

  // const dispatch = useDispatch();
  // const { data: user } = useSelector((state) => state.user);
  // const { id: videoId, comments } = useSelector((state) => state.video.data);

  // const handleAddComment = async (e) => {
  //   if (e.keyCode === 13) {
  //     e.target.blur();

  //     const { data } = await axios.post(
  //       `$http://localhost:3000/api/comments/videos/${videoId}/comment`,
  //       {
  //         body: { text: comment.value },
  //       }
  //     );

  //     dispatch(data);
  //     comment.setValue("");
  //   }
  // };

  // return (
  //   <div className="comment-body">
  //     <h3>{comments?.length} comments</h3>

  //     <div className="add-comment">
  //       <img src={user.avatar} alt="avatar" />
  //       <textarea
  //         placeholder="Add a public comment"
  //         value={comment.value}
  //         onKeyDown={handleAddComment}
  //         onChange={comment.onChange}
  //       />
  //     </div>

  //     {comments &&
  //       comments.map((comment) => (
  //         <div key={comment.id} className="comment">
  //           <div className="comment-info">
  //             <p className="secondary">
  //               <span style={{ marginLeft: "0.6rem" }}>
  //                 {timeSense(comment.createdAt)} ago
  //               </span>
  //             </p>
  //             <p>{comment.text}</p>
  //           </div>
  //         </div>
  //       ))}
  //   </div>
  // );
};

export default Comment;
