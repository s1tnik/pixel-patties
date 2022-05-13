import React from "react";
import "./styles.scss";
import teamTitle from "../../assets /images/Team.png";
import imageFrame from "../../assets /images/image-frame.png";
import descriptionFrame from "../../assets /images/description-frame.png";
import DefaultLayout from "../../components /DefaultLayout";

const TeamScreen = React.forwardRef((_, ref) => {
  return (
    <DefaultLayout title="team">
      <div ref={ref} className="team-container">
        <div className="wrapper">
          <div className="team-members">
            <div className="member first">
              <div className="image">
                <img src={imageFrame} alt="face" />
              </div>
              <div className="description">
                <img src={descriptionFrame} alt="frame" />
              </div>
            </div>
            <div className="member second">
              <div className="image">
                <img src={imageFrame} alt="face" />
              </div>
              <div className="description">
                <img src={descriptionFrame} alt="frame" />
              </div>
            </div>
            <div className="member third">
              <div className="image">
                <img src={imageFrame} alt="face" />
              </div>
              <div className="description">
                <img src={descriptionFrame} alt="frame" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
});

export default TeamScreen;
