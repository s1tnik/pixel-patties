import React from "react";
import burgerLoading from "../assets /gifs/burger-loading.gif";
import LoadingDots from "../components /LoadingDots";

export default function LoadingScreen() {
  return (
    <div className="loading-container">
      <div className="img-container">
        <img src={burgerLoading} alt="loading" />
      </div>
      <div className="heading-container">
        <p className="heading">Cooking something</p>
        <div className="loading-dots">
          <LoadingDots />
        </div>
      </div>
    </div>
  );
}
