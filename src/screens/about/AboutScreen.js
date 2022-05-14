import React from "react";
import "./styles.scss";
import DefaultLayout from "../../components /DefaultLayout";

const AboutScreen = React.forwardRef((_, ref) => {
  return (
    <DefaultLayout title="about">
      <div ref={ref} className="about-container">
        <div className="wrapper">
          <div className="description">slava</div>
          <div className="showcase">slava</div>
        </div>
      </div>
    </DefaultLayout>
  );
});

export default AboutScreen;
