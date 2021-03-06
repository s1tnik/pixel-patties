import React, { useEffect } from "react";
import "./styles.scss";
import title from "../../assets /images/TPP-title.png";
import twitterIcon from "../../assets /icons/twitter-icon.svg";
import miniBurger from "../../assets /images/mini-burger.png";
import useWindowSize from "../../hooks/useWindowSize";
import DefaultLayout from "../../components /DefaultLayout";

const Burger = (props) => {
  return (
    <div className="burger" id={`item${props.id}`} style={props.style}>
      <img src={miniBurger} alt="burger" />
    </div>
  );
};

const HomeScreen = React.forwardRef((_, ref) => {
  {
    const { width: screenWidth } = useWindowSize();

    const burgerFall = () => {
      let animationDelay = "0s";
      return [...new Array(4)].map((el, i) => {
        animationDelay = `${i}s`;
        const style = {
          width: `${screenWidth / 20}px`,
          animationDelay,
          marginLeft: i === 1 ? `${screenWidth / 20}px` : 0,
        };
        return (
          <React.Fragment>
            <Burger key={i} id={i} style={style} />
          </React.Fragment>
        );
      });
    };

    const iconStyle = {
      width: `${screenWidth / 20}px`,
    };

    return (
      <DefaultLayout ref={ref}>
        <div className="home-container">
          <div className="left-side">{burgerFall()}</div>
          {screenWidth < 850 ? <div /> : null}
          <div className="content">
            <div className="title">
              <img src={title} alt="title" />
            </div>
            <div className="social-medias">
              <div style={iconStyle} className="icon">
                <img src={twitterIcon} alt="twitter icon" />
              </div>
              <div style={{...iconStyle, opacity: .53}} className="icon">
                <img src={twitterIcon} alt="twitter icon" />
              </div>
            </div>
          </div>
          <div className="right-side">{burgerFall()}</div>
        </div>
      </DefaultLayout>
    );
  }
});

export default HomeScreen;
