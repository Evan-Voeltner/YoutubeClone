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
      setVideoResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <SearchBar getVideoResults={getVideoResults} />
      {/* {videoResults.items.map((result) => {
        return (
            <tr></tr>
        )})} */}
    </div>
  );
};

export default SearchPage;
