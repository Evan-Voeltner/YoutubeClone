import React from "react";
import VideoPreview from "../VideoPreview/VideoPreview";
import { Grid } from "@material-ui/core";
import axios from "axios";
import keys from "../../API_Keys.json";
import { useState } from "react";
import { useEffect } from "react";

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

  // const ListOfVideos = videos.map((video, id) => (
  //   <VideoPage onVideoSelect={onVideoSelect} key={id} video={video} />
  // ));
  // return (
  //   <Grid container spacing={10}>
  //     {ListOfVideos}
  //   </Grid>
  // );
};

export default RelatedVideos;
