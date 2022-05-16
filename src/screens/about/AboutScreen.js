import React, {useEffect, useRef, useState} from "react";
import "./styles.scss";
import DefaultLayout from "../../components /DefaultLayout";

import cosmo from "../../assets /images/cosmo.png"
import matrix from "../../assets /images/Matrix.png"
import nekko from "../../assets /images/nekko.png"
import angel from "../../assets /images/angel.png"

import _149 from "../../assets /images/149.png"
import _350 from "../../assets /images/350.png"
import _1200_1 from "../../assets /images/1200_1.png"
import _1200_2 from "../../assets /images/1200_2.png"

import snacks from "../../assets /images/snacks.png"
import useWindowSize from "../../hooks/useWindowSize";

const AboutScreen = React.forwardRef((_, ref) => {

    const showcaseRef = useRef(null);
    const {width: screenWidth, height: screenHeight} = useWindowSize();
    const heightStyle = (showcaseRef.current && screenWidth > 1000 && screenHeight < 680) ? {height: `${showcaseRef.current.offsetHeight}px`} : {};
    const [needUpdate, setNeedUpdate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setNeedUpdate(prevState => !prevState);
        }, 5000)

        return () => clearInterval(interval)

    }, [])

    return (
        <DefaultLayout ref={ref} title="about">
            <div className="about-container">
                <div className="wrapper">
                    <div style={heightStyle} className="description">
                        <img className="snacks" src={snacks} alt="snacks"/>
                        <h3>Meet the Patties</h3>
                        <div className="content">
                            <p>Imagine that food is a language…Then the burger is the language that’s spoken all over
                                the
                                world. Taking a simple burger as a basis, we went beyond the limits and presented it in
                                a
                                different light.</p>
                            <p>The Pixel Patties is a collection of 3,333 badass burgers which grant you an access to
                                the
                                upcoming HUGE utility of the Patties Ecosystem. Each Pixel Patty is randomly generated
                                from
                                99 unique traits of different rarities and permanently stored on decentralised web
                                (IPFS).</p>
                        </div>
                    </div>
                    <div ref={showcaseRef} className="showcase">
                        <div className="row">
                            <div className={`item`}><img src={needUpdate ? _149 : cosmo} alt=""/></div>
                            <div className="item"><img src={needUpdate ? _350 : matrix} alt=""/></div>
                        </div>
                        <div className="row">
                            <div className="item"><img src={needUpdate ? _1200_1 : nekko} alt=""/></div>
                            <div className="item"><img src={needUpdate ? _1200_2 : angel} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
});

export default AboutScreen;
