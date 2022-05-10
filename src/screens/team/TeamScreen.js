import React from "react";
import "./styles.scss";
import teamTitle from "../../assets /images/Team.png";
import imageFrame from "../../assets /images/image-frame.png";
import descriptionFrame from "../../assets /images/description-frame.png";

const TeamScreen = React.forwardRef((_, ref) => {
  return (
    <div ref={ref} className="team-container">
      <div className="wrapper">
        <div className="title">
          <img src={teamTitle} alt="team" />
        </div>
        <div className="team-members">
          <div className="member">
            <div className="image">
              <img src={imageFrame} alt="face" />
            </div>
            <div className="description">
              <img src={descriptionFrame} alt="frame" />
            </div>
          </div>
          <div className="member">
            <div className="image">
              <img src={imageFrame} alt="face" />
            </div>
            <div className="description">
              <img src={descriptionFrame} alt="frame" />
            </div>
          </div>
          <div className="member">
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
  );
});

export default TeamScreen;
