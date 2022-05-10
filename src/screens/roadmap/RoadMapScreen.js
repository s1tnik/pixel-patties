import React from "react";
import "./styles.scss";
import windowImage from "../../assets /images/window.png";
import burgerImage from "../../assets /images/burger.png";
import textBlockImage from "../../assets /images/text-block.png";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const renderSlider = () => (
  <Slider {...settings}>
    <div className="slider-item">
      <img src={burgerImage} alt="burger" />
    </div>
    <div className="slider-item">
      <img src={burgerImage} alt="burger" />
    </div>
  </Slider>
);

const RoadMapScreen = React.forwardRef((_, ref) => {
  return (
    <div ref={ref} className="about-container">
      <div className="wrapper">
        <div className="information">
          <img src={textBlockImage} alt="text-block" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
            aliquid autem delectus dicta, eaque excepturi expedita fugiat, in
            modi nostrum provident rem repellat sit vel. Dignissimos molestiae
            nisi veritatis.
          </p>
        </div>
        <div className="about-slider">
          <div className="slider-container">
            <img src={windowImage} alt="window" />
            <div className="slider">{renderSlider()}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RoadMapScreen;
