import React from "react";
import { Grid } from "@material-ui/core";
import VideoPage from "../VideoPage/VideoPage";

const RelatedVideos = ({ videos, onVideoSelect }) => {
  const ListOfVideos = videos.map((video, id) => (
    <VideoPage onVideoSelect={onVideoSelect} key={id} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      {ListOfVideos}
    </Grid>
  );
};

export default RelatedVideos;