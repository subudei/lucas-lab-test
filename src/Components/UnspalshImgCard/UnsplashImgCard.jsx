import React from "react";
import "./UnsplashImgCard.css";

const UnsplashImgCard = ({ name, image }) => {
  return (
    <div className="img__container">
      <div className="img__wrapper">
        <img src={image} alt={name} className="img" />
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default UnsplashImgCard;
