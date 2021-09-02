import React from "react";
import { useSelector } from "react-redux";
import UnsplashImgCard from "../UnspalshImgCard/UnsplashImgCard";
import "./UnspalshGallery.css";



const UnsplashGallery = () => {
  const gallery = useSelector((state) => state.gallery.imgData);
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
