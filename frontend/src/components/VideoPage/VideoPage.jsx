import React from "react";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

const VideoPage = (props) => {
  console.log("Video in videoPage", props);

  return (
    <div>
      <h1>{props.currentVideo.snippet.title}</h1>
      <iframe
        src={`https://www.youtube.com/embed/${props.currentVideo.id.videoId}`}
        frameBorder="0"
      ></iframe>
      <p>{props.currentVideo.snippet.description}</p>
      <CommentForm videoId={props.currentVideo.id.videoId} postNewComment={props.postNewComment}/>
      <CommentList videoComments={props.videoComments}/>
      <RelatedVideos
        relatedVideos={props.relatedVideos}
        goToCurrentVideo={props.goToCurrentVideo}
      />
    </div>
  );
};

export default VideoPage;
