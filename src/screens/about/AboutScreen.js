import React from "react";
import "./styles.scss";
import DefaultLayout from "../../components /DefaultLayout";
import textBlock from "../../assets /images/text_block_about.png"
import cosmo from "../../assets /images/Cosmo_800.png"
import defaultBurger from "../../assets /images/Default_800.png"
import nekko from "../../assets /images/Nekko_800.png"
import skeleton from "../../assets /images/Skeleton_800.png"
import snacks from "../../assets /images/snacks.png"


const AboutScreen = React.forwardRef((_, ref) => {
    return (
        <DefaultLayout title="about">
            <div ref={ref} className="about-container">
                <div className="wrapper">
                    <div className="description">
                        <img src={textBlock} alt="block"/>
                        <img className="snacks" src={snacks} alt="snacks"/>
                        <div className="text">
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi mollitia officia
                                perferendis quam quos, ratione.</p>
                        </div>
                    </div>
                    <div className="showcase">
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
