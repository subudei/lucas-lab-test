import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { gettingData } from "../../redux/gallerySlice";

const UnsplashForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const fetchData = async (query) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&query=${query}`
      );
      const data = await response.json();
      setData(data.results);
      console.log(data);
    } catch (error) {
      console.log("Error :", error);
    }
  };
  const handleSearchPhotos = (e) => {
    e.preventDefault();
    setQuery(input);
    // fetchData(query);
    dispatch(gettingData({ imgData: data }));
    console.log(query);
    setInput("");
  };

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSearchPhotos}>
        <input
          type="text"
          placeholder="Enter a therm"
          value={input}
          onChange={handleInput}
        />
        <button type="submit">Search Photos</button>
      </form>
    </div>
  );
};

export default UnsplashForm;
