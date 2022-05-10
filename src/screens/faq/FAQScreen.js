import React from "react";
import "./styles.scss";
import faqTitle from "../../assets /images/FAQ.png";
import questionBlock from "../../assets /images/question-block.png";

const FAQScreen = React.forwardRef((_, ref) => {
  return (
    <div ref={ref} className="faq-container">
      <div className="wrapper">
        <div className="title">
          <img src={faqTitle} alt="FAQ" />
        </div>
        <div className="questions-container">
          {[...new Array(4)].map(() => (
            <div className="question">
              <img src={questionBlock} alt="block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default FAQScreen;
