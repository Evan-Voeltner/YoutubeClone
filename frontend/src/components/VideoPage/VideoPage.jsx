import React from "react";
// import { Grid, Paper, Typography } from "@material-ui/core";

const VideoPage = (props) => {
  console.log('Video in videoPage', props)
  let videoSource = `https://www.youtube.com/embed/${props.currentVideo.id.videoId}`

  
  return (
    <div>
      <iframe src={videoSource} frameBorder="0"></iframe>
    </div>



    // <Grid item xs={12}>
    //   <Paper
    //     style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    //     onClick={() => onVideoSelect(video)}
    //   >
    //     <img
    //       style={{ marginRight: "20px" }}
    //       alt="thumbnail"
    //       src={video.snippet.thumbnails.medium.url}
    //     />
    //     <Typography variant="subtitle1">
    //       <b>{video.snippet.title}</b>
    //     </Typography>
    //   </Paper>
    // </Grid>
  );
};

export default VideoPage;