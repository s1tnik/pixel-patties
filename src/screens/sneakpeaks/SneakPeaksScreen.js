import React from "react";
import "./styles.scss";
import sneakTitle from "../../assets /images/SneakPeek.png";
import srcImage from "../../assets /images/Angel_800.png";
import DefaultLayout from "../../components /DefaultLayout";

const images = [
    "../../assets /images/Angel_800.png",
    "../../assets /images/Cosmo_800.png",
    "../../assets /images/Default_800.png",
    "../../assets /images/King_800.png",
    "../../assets /images/Nekko_800.png",
    "../../assets /images/Skeleton_800.png",
    "../../assets /images/Skeleton_800.png",
    "../../assets /images/Skeleton_800.png",
];

const SneakPeaksScreen = React.forwardRef((_, ref) => {
    return (
        <DefaultLayout title={<img src={sneakTitle} alt="sneak peak"/>
        }>
            <div ref={ref} className="sneakpeaks-container">
                <div className="wrapper">
                    <div className="images-container">
                        <div className="images-wrapper">
                            {images.map((src) => (
                                <div className="item" key={src}>
                                    <img src={srcImage} alt="burger"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
});

export default SneakPeaksScreen;
