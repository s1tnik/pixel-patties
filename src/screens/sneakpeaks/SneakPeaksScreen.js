import React, { useEffect, useState } from "react";
import "./styles.scss";
import sneakTitle from "../../assets /images/SneakPeek.png";
import srcImage from "../../assets /images/Angel_800.png";
import DefaultLayout from "../../components /DefaultLayout";
import useWindowSize from "../../hooks/useWindowSize";

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
  const [numberOfItems, setNumberOfItems] = useState(8);

  const { width: screenWidth } = useWindowSize();

  useEffect(() => {
    if (screenWidth < 800 && numberOfItems !== 6) {
      return setNumberOfItems(6);
    }

    if (screenWidth > 800 && numberOfItems !== 8) {
      return setNumberOfItems(8);
    }
  }, [screenWidth]);

  return (
    <DefaultLayout title="sneak peak">
      <div ref={ref} className="sneakpeaks-container">
        <div className="wrapper">
          <div className="images-container">
            <div className="images-wrapper">
              {images.slice(0, numberOfItems).map((src) => (
                <div className="item" key={src}>
                  <img src={srcImage} alt="burger" />
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
