import React, { useState } from "react";
import "./styles.scss";
import faqTitle from "../../assets /images/FAQ.png";
import DefaultLayout from "../../components /DefaultLayout";

const FAQScreen = React.forwardRef((_, ref) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const onQuestionClick = (index) => {
    if (index === activeQuestion) {
      return setActiveQuestion(null);
    }

    setActiveQuestion(index);
  };

  const isActive = (index) => {
    return activeQuestion === index;
  };

  return (
    <DefaultLayout ref={ref} title="FAQ">
      <div className="faq-container">
        <div className="wrapper">
          <div className="questions-container">
            {[...new Array(4)].map((_, index) => (
              <div onClick={() => onQuestionClick(index)} className="question">
                <p className="title">Title</p>
                <p className={`content ${isActive(index) ? "active" : ""}`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur, saepe?
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
});

export default FAQScreen;
