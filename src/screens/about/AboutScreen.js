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
                        <h3>Meet the Patties</h3>
                        <p>Imagine that food is a language…Then the burger is the language that’s spoken all over the
                            world. Taking a simple burger as a basis, we went beyond the limits and presented it in a
                            different light.</p>
                        <p>The Pixel Patties is a collection of 3,333 badass burgers which grant you an access to the
                            upcoming HUGE utility of the Patties Ecosystem. Each Pixel Patty is randomly generated from
                            99 unique traits of different rarities and permanently stored on decentralised web
                            (IPFS).</p>
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
