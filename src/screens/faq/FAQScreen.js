import React, {useState} from "react";
import "./styles.scss";
import faqTitle from "../../assets /images/FAQ.png";
import questionBlock from "../../assets /images/question-block.png";
import questionBlockLong from "../../assets /images/question-block-long.png";
import DefaultLayout from "../../components /DefaultLayout";

const FAQScreen = React.forwardRef((_, ref) => {

    const [activeQuestion, setActiveQuestion] = useState(null);

    const onQuestionClick = (index) => {

        if (index === activeQuestion) {
            return setActiveQuestion(null)
        }

        setActiveQuestion(index)
    }

    const isActive = (index) => {
        return activeQuestion === index;
    }

    return (
        <DefaultLayout title={<img src={faqTitle} alt="FAQ"/>}>
            <div ref={ref} className="faq-container">
                <div className="wrapper">
                    <div className="questions-container">
                        {[...new Array(4)].map((_, index) => (
                            <div onClick={() => onQuestionClick(index)} className="question">
                                <img style={!isActive(index) && activeQuestion !== null ? {opacity: "0.6"} : {}}
                                     src={index === activeQuestion ? questionBlockLong : questionBlock} alt="block"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
});

export default FAQScreen;
