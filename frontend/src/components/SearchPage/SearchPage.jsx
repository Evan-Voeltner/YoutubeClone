import axios from "axios";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import VideoPreview from "../VideoPreview/VideoPreview";
import keys from "../../API_Keys.json";

const SearchPage = (props) => {
  const [videoResults, setVideoResults] = useState([]);

  async function getVideoResults(searchQuery) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=${keys.googleAPIKey}&part=snippet`
      );
      let suggestedVideos = response.data.items;
      console.log('inital axios call',suggestedVideos);
      setVideoResults(suggestedVideos);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <SearchBar getVideoResults={getVideoResults} />
      {videoResults.map((result) => {
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
