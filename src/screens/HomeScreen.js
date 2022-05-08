import React from "react";
import title from "../assets /images/TPP-title.png";
import twitterIcon from "../assets /icons/twitter-icon.svg";
import miniBurger from "../assets /images/mini-burger.png";

const Burger = (props) => {
  return (
    <div className="burger" id={`item${props.id}`} style={props.style}>
      <img src={miniBurger} alt="burger" />
    </div>
  );
};

export default function HomeScreen() {
  const burgerFall = () => {
    let animationDelay = "0s";
    return [...new Array(4)].map((el, i) => {
      animationDelay = `${i}s`;
      let style = {
        animationDelay,
        marginLeft: i === 1 ? "100px" : 0,
      };
      return (
        <React.Fragment>
          <Burger key={i} id={i} style={style} />
        </React.Fragment>
      );
    });
  };

  return (
    <div className="home-container">
      <div className="left-side">{burgerFall()}</div>
      <div className="content">
        <div className="title">
          <img src={title} alt="title" />
        </div>
        <div className="social-medias">
          <div className="icon">
            <img src={twitterIcon} alt="twitter icon" />
          </div>
          <div className="icon">
            <img src={twitterIcon} alt="twitter icon" />
          </div>
          <div className="icon">
            <img src={twitterIcon} alt="twitter icon" />
          </div>
        </div>
      </div>
      <div className="right-side">{burgerFall()}</div>
    </div>
  );
}
