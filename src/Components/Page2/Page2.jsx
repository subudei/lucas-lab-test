import React, { useState, useEffect } from "react";

import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import UnsplashGallery from "../UnspashGallery/UnsplashGallery";
import UnsplashForm from "../UnspalshForm/UnsplashForm";

function Page2() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [imgData, setImgData] = useState([]);

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
    getingData();
  }, []);

  return (
    <div className="page__2__container">
      <Navbar />
      <h2>Page 2 (Unspalsh Gallery)</h2>
      <UnsplashForm />
      <form onSubmit={handleSearchPhotos}>
        <input
          type="text"
          placeholder="Enter a therm"
          value={query}
          onChange={handleSearchQuery}
        />
        <button type="submit">Search Photos</button>
      </form>
      <UnsplashGallery data={imgData} />
    </div>
  );
}

export default Page2;
