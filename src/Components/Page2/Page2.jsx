import React from "react";
import "./Page2.css";

import Navbar from "../Navbar/Navbar";
import UnsplashGallery from "../UnspashGallery/UnsplashGallery";
import UnsplashForm from "../UnspalshForm/UnsplashForm";

const Page2 = () => {
  return (
    <div className="page2__container">
      <Navbar />
      <div className="page__div">
        <h2>Page 2 (Unsplash Gallery)</h2>
        <UnsplashForm />
        <UnsplashGallery />
      </div>
    </div>
  );
};

export default Page2;
