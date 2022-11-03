import React, { useState } from "react";

const SearchBar = (props) => {
  const [search, setVideoID] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.getVideoResults(search);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Video Search</label>
      <input
        type="text"
        value={search}
        onChange={(event) => setVideoID(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
