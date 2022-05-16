import React, {useState} from "react";
import "./styles.scss";
import DefaultLayout from "../../components /DefaultLayout";

const questions = [
    {
        title: "Team Doxxed?",
        content: "Yes. We're real people with real IRL experience in business, IT and design. We're 24/7 online and ready to answer all your questions."
    },
    {
        title: "Holder benefits?",
        content: "The Pixel Patties is the key to a huge ecosystem: a P2E game with its own $PATTY token, a unique stacking system and a marketplace.\n"
    },
    {
        title: "Wen mint?",
        content: "Mint price and Mint date will be announced soon on our official Twitter and Discord accounts."
    },
    {
        title: "Why patties?",
        content: "Simple but delicious - Just like our project: simple pixel art, but very useful utility. Moreover, the goal of our project is to bring BIG food brands to our Metakitchen."
    },
]

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
                        {questions.map(({title, content}, index) => (
                            <div onClick={() => onQuestionClick(index)} className="question">
                                <p className="title">{title}</p>
                                <p className={`content ${isActive(index) ? "active" : ""}`}>
                                    {content}
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
