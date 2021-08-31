import React from "react";
import UnsplashImgCard from "../UnspalshImgCard/UnsplashImgCard";
import "./UnspalshGallery.css";

function UnsplashGallery({ data }) {
  const gallery = data;
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
      {/* <UnsplashImgCard />
      <UnsplashImgCard />
      <UnsplashImgCard />
      <UnsplashImgCard /> */}
    </div>
  );
}

export default UnsplashGallery;
