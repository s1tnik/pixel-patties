import React from "react";
import "./styles.scss";
import windowImage from "../../assets /images/window.png";
import burgerImage from "../../assets /images/burger.png";
import gamePadImage from '../../assets /images/gamepad.png'
import plateImage from "../../assets /images/cover cloche_big.png"
import chestImage from "../../assets /images/MarketPalce.png"
import textBlockImage from "../../assets /images/text-block.png";
import Slider from "react-slick";
import DefaultLayout from "../../components /DefaultLayout";

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const renderSlider = () => (
    <Slider {...settings}>
        <div className="slider-item">
            <img src={burgerImage} alt="burger"/>
        </div>
        <div className="slider-item">
            <img className="gamepad" src={gamePadImage} alt="gamepad"/>
        </div>
        <div className="slider-item">
            <img src={chestImage} alt="chest"/>
        </div>
        <div className="slider-item">
            <img src={plateImage} alt="cloth"/>
        </div>
    </Slider>
);

const RoadMapScreen = React.forwardRef((_, ref) => {
    return (
        <DefaultLayout title="road map">
            <div ref={ref} className="roadmap-container">
                <div className="wrapper">
                    <div className="information">
                        <img src={textBlockImage} alt="text-block"/>
                        <h3>Title</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
                            aliquid autem delectus dicta, eaque excepturi expedita fugiat, in
                            modi nostrum provident rem repellat sit vel. Dignissimos molestiae
                            nisi veritatis.
                        </p>
                    </div>
                    <div className="about-slider">
                        <div className="slider-container">
                            <img src={windowImage} alt="window"/>
                            <div className="slider">{renderSlider()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
});

export default RoadMapScreen;
