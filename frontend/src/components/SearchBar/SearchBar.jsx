import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchQuery, setVideoID] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.getVideoResults(searchQuery);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Video Search</label>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setVideoID(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
