import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import CommentList from "../CommentList/CommentList";

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
      {/* <RelatedVideos
        relatedVideos={props.relatedVideos}
        goToCurrentVideo={props.goToCurrentVideo}
      /> */}
      <CommentList videoId={props.currentVideo.id.videoId}/>
    </div>
  );
};

export default VideoPage;
