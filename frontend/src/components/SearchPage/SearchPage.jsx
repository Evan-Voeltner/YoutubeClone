import axios from "axios";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import keys from "../../API_Keys.json";

const SearchPage = (props) => {
  const [videoResults, setVideoResults] = useState([]);

  async function getVideoResults(searchQuery) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=${keys.googleAPIKey}`
      );
      let suggestedVideos = response.data.items;
      console.log(suggestedVideos);
      setVideoResults(suggestedVideos);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <SearchBar getVideoResults={getVideoResults} />
        {videoResults.map((result) => {
          console.log(result, 'Raw Result')
          console.log(result.id.videoId)
          return(
          <p>{result.id.videoId}</p>
          );
        })}
    </div>
  );
};

export default SearchPage;
