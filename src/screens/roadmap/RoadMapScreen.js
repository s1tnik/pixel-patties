import React, {useRef, useState} from "react";
import "./styles.scss";
import windowImage from "../../assets /images/window.png";
import burgerImage from "../../assets /images/burger.png";
import gamePadImage from '../../assets /images/gamepad.png'
import plateImage from "../../assets /images/cover cloche_big.png"
import chestImage from "../../assets /images/MarketPalce.png"
import pinImage from "../../assets /images/pin.png"
import coinImage from "../../assets /images/coin.png"
import Slider from "react-slick";
import DefaultLayout from "../../components /DefaultLayout";
import useWindowSize from "../../hooks/useWindowSize";

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const descriptions = [
    {
        title: "SIMPLE BUT DELICIOUS",
        content: "3,333 cute burgers created by a talented Asian artist.\n" +
            "The Pixel Patties is a genesis collection which is the key to the huge ecosystem we are building"
    },
    {
        title: "$PATTY - UNIQUE UTILITY TOKEN",
        content: "$PATTY token will become the main component of the Pixel Patties ecosystem. It mainly serves three purposes:\n" +
            "it's the official currency of our marketplace\n" +
            "it's a tool for voting in the DAO\n" +
            "it's what you get for staking Patties"
    },
    {
        title: "OUR MARKETPLACE",
        content: "We provide holders with access to our marketplace, where every Patty Holder will be able to receive WL in cool projects and participate in raffle simply for the fact that their NFT's staked"
    },
    {
        title: "PIXEL PATTIES: THE GAME",
        content: "Our professional team is working on creating a nostalgic time-killing game on iOS and Android exclusively for our holders.\n" +
            "We all play games, but imagine that now we will really get paid for it!\n" +
            "Release Date: TBA right after the mint"
    },
    {
        title: "WE'RE STILL COOKING SMTH...",
        content: "\"Reward the true holders, punish the paperhands\" - this is the main principle of The Pixel Patties Team.\n" +
            "\n" +
            "What you've read in our Roadmap is just the beginning. \n" +
            "Something HUGE will be very soon (really soon, we don't like to wait either:)"
    }
]


const RoadMapScreen = React.forwardRef((_, ref) => {

    const sliderRef = useRef(null);
    const {width: screenWidth, height: screenHeight} = useWindowSize();
    const heightStyle = (sliderRef.current && screenWidth > 1000 && screenHeight < 680) ? {height: `${sliderRef.current.offsetHeight}px`} : {};
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <DefaultLayout ref={ref} title="road map">
            <div className="roadmap-container">
                <div className="wrapper">
                    <div style={heightStyle} className="information">
                        <img src={pinImage} alt="pin" className="pin-image"/>
                        <h3>{descriptions[currentSlide].title}</h3>
                        <p>
                            {descriptions[currentSlide].content}
                        </p>
                    </div>
                    <div ref={sliderRef} className="about-slider">
                        <div className="slider-container">
                            <img src={windowImage} alt="window"/>
                            <div className="slider">
                                <Slider beforeChange={(_, index) => setCurrentSlide(index)} {...settings}>
                                    <div className="slider-item">
                                        <img src={burgerImage} alt="burger"/>
                                    </div>
                                    <div className="slider-item">
                                        <img className="coin" src={coinImage} alt="coin"/>
                                    </div>
                                    <div className="slider-item">
                                        <img src={chestImage} alt="chest"/>
                                    </div>
                                    <div className="slider-item">
                                        <img className="gamepad" src={gamePadImage} alt="gamepad"/>
                                    </div>
                                    <div className="slider-item">
                                        <img src={plateImage} alt="cloth"/>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
});

export default RoadMapScreen;
