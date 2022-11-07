import axios from "axios";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import VideoPreview from "../VideoPreview/VideoPreview";
import keys from "../../API_Keys.json";

const SearchPage = (props) => {
  return (
    <div>
      {props.videoResults.map((result) => {
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

export default SearchPage;
