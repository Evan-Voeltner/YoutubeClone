import React, { useState } from "react";

const VideoPreview = (props) => {
  return (
    <div>
      <img
        src={props.videoInfo.thumbnails.medium.url}
        alt="img failure"
      />
      <h2>{props.videoInfo.title}</h2>
    </div>
  );
};

export default VideoPreview;
