import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { gettingData } from "../../redux/gallerySlice";

const UnsplashForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const fetchData = async (input) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&query=${input}`
      );
      const data = await response.json();
      setData(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };
  const handleSearchPhotos = async (e) => {
    e.preventDefault();
    await fetchData(input);
    setInput("");
  };

  useEffect(() => {
    if (data) dispatch(gettingData({ imgData: data }));
  }, [data, dispatch]);

  return (
    <div>
      <form onSubmit={handleSearchPhotos}>
        <input
          type="text"
          placeholder="Search photos"
          value={input}
          onChange={handleInput}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default UnsplashForm;
