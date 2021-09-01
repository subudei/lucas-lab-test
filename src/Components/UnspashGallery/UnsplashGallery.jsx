import React from "react";
import "./UnspalshGallery.css";

import { useSelector } from "react-redux";

import UnsplashImgCard from "../UnspalshImgCard/UnsplashImgCard";

const UnsplashGallery = () => {
  const gallery = useSelector((state) => state.gallery.imgData.imgData);
  console.log("gallery :", gallery);
  return (
    <div className="gallery__container">
      {gallery &&
        gallery.map((img) => {
          return (
            <UnsplashImgCard
              key={img.id}
              id={img.id}
              name={img.alt_description}
              image={img.urls.regular}
            />
          );
        })}
    </div>
  );
};

export default UnsplashGallery;
