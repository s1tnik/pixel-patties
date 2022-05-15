import React, {useRef} from "react";
import "./styles.scss";
import windowImage from "../../assets /images/window.png";
import burgerImage from "../../assets /images/burger.png";
import gamePadImage from '../../assets /images/gamepad.png'
import plateImage from "../../assets /images/cover cloche_big.png"
import chestImage from "../../assets /images/MarketPalce.png"
import pinImage from "../../assets /images/pin.png"
import Slider from "react-slick";
import DefaultLayout from "../../components /DefaultLayout";
import useWindowSize from "../../hooks/useWindowSize";

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

    const sliderRef = useRef(null);
    const {width: screenWidth, height: screenHeight} = useWindowSize();
    const heightStyle = (sliderRef.current && screenWidth > 1000 && screenHeight < 680) ? {height: `${sliderRef.current.offsetHeight}px`} : {};

    return (
        <DefaultLayout ref={ref} title="road map">
            <div className="roadmap-container">
                <div className="wrapper">
                    <div style={heightStyle} className="information">
                        <img src={pinImage} alt="pin" className="pin-image"/>
                        <h3>Title</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad
                            aliquid autem delectus dicta, eaque excepturi expedita fugiat, in
                            modi nostrum provident rem repellat sit vel. Dignissimos molestiae
                            nisi veritatis.
                        </p>
                    </div>
                    <div ref={sliderRef} className="about-slider">
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
