import React, {useRef} from "react";
import "./styles.scss";
import DefaultLayout from "../../components /DefaultLayout";
import cosmo from "../../assets /images/Cosmo_800.png"
import defaultBurger from "../../assets /images/Default_800.png"
import nekko from "../../assets /images/Nekko_800.png"
import skeleton from "../../assets /images/Skeleton_800.png"
import snacks from "../../assets /images/snacks.png"
import useWindowSize from "../../hooks/useWindowSize";


const AboutScreen = React.forwardRef((_, ref) => {

    const showcaseRef = useRef(null);
    const {width: screenWidth, height: screenHeight} = useWindowSize();
    const heightStyle = (showcaseRef.current && screenWidth > 1000 && screenHeight < 680) ? {height: `${showcaseRef.current.offsetHeight}px`} : {};

    return (
        <DefaultLayout ref={ref} title="about">
            <div className="about-container">
                <div className="wrapper">
                    <div style={heightStyle} className="description">
                        <img className="snacks" src={snacks} alt="snacks"/>
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi mollitia officia
                            perferendis quam quos, ratione.</p>
                    </div>
                    <div ref={showcaseRef} className="showcase">
                        <div className="row">
                            <div className="item"><img src={nekko} alt=""/></div>
                            <div className="item"><img src={skeleton} alt=""/></div>
                        </div>
                        <div className="row">
                            <div className="item"><img src={cosmo} alt=""/></div>
                            <div className="item"><img src={defaultBurger} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
});

export default AboutScreen;
