import React from "react";
import VideoPreview from "../VideoPreview/VideoPreview";


const RelatedVideos = (props) => {
  
  return (
    <div>
      {props.relatedVideos.map((result) => {
        console.log(result, "Raw Result");
        return (
          <div>
            <VideoPreview
              videoInfo={result}
              goToCurrentVideo={props.goToCurrentVideo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RelatedVideos;
