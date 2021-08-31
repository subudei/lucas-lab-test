import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function UnsplashForm() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [imgData, setImgData] = useState([]);

  let id = "bp3L3WcUFnWVScrQkQwPbpIPwmO4STUtXNHycSaF05Q";

  const handleSearchPhotos = (e) => {
    e.preventDefault();
    console.log(query);
    dispatch(() => {});
    setQuery("");
  };
  const handleSearchQuery = (e) => {
    setQuery(e.target.value);
  };

  const getingData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&query=cars`
      );
      const data = await response.json();
      console.log(data);
      setImgData(await data.results);
      console.log(imgData[0].id);
    } catch (err) {
      console.log("eroor message :", err);
    }
  };

  useEffect(() => {
    console.log(process.env);
    // getingData();
  }, []);

  return (
    <div>
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

export default UnsplashForm;
