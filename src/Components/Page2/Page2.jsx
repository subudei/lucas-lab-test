import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";

function Page2() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSearchPhotos = (e) => {
    e.preventDefault();
    console.log(query);
    dispatch(() => {});
    setQuery("");
  };
  const handleSearchQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <h2>Page 2 (Unspalsh Gallery)</h2>
      <form onSubmit={handleSearchPhotos}>
        <input
          type="text"
          placeholder="Enter a therm"
          value={query}
          onChange={handleSearchQuery}
        />
        <button type="submit">Search Photos</button>
      </form>
    </div>
  );
}

export default Page2;
