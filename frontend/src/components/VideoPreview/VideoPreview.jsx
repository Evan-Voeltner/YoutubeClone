import React, { useState } from "react";

const VideoPreview = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    props.goToCurrentVideo(props.videoInfo);
  }

  return (
    <div>
        <img
          src={props.videoInfo.snippet.thumbnails.medium.url}
          alt="img failure"
        />
      <h2>{props.videoInfo.snippet.title}</h2>
      <button onClick={handleSubmit}></button>
    </div>
  );
};

export default VideoPreview;
