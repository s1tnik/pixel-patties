import "./App.scss";
import HomeScreen from "./screens/home/HomeScreen";
import RoadMapScreen from "./screens/roadmap/RoadMapScreen";
import useWindowSize from "./hooks/useWindowSize";
import { useEffect, useRef, useState} from "react";
import Navigation from "./components /Navigation";
import AboutScreen from "./screens/about/AboutScreen";
import TeamScreen from "./screens/team/TeamScreen";
import FAQScreen from "./screens/faq/FAQScreen";
import navbarTitle from "./assets /images/navbar-title.png";
import scrollTo from "./helpers/scrollTo";
import isScrolledIntoView from "./helpers/isScrolledIntoView";

const links = ["home", "about", "roadmap", "team", "faq"];

function App() {
    const {width: screenWidth, height: screenHeight} = useWindowSize();

    const homeContainer = useRef(null);
    const aboutContainer = useRef(null);
    const roadMapContainer = useRef(null);
    const teamContainer = useRef(null);
    const faqContainer = useRef(null);

    const currentScreen = useRef(0);
    const [current, setCurrent] = useState(0);

    let screens = [
        homeContainer,
        aboutContainer,
        roadMapContainer,
        teamContainer,
        faqContainer,
    ];

    const renderScreens = () => (
        <>
            {/*<LoadingScreen />*/}
            <HomeScreen ref={homeContainer}/>
            <AboutScreen ref={aboutContainer}/>
            <RoadMapScreen ref={roadMapContainer}/>
            <TeamScreen ref={teamContainer}/>
            <FAQScreen ref={faqContainer}/>
        </>
    );

    const isActive = (index) => {
        return index === current;
    };

    const handleOnLinkClick = (index) => {
        const times = index - currentScreen.current;
        currentScreen.current = index;
        setCurrent(index);

        if (screenWidth > 450 && screenHeight > 680) {
            window.document.querySelector(".scroll-navigation").scrollBy({
                top: 0,
                left: window.innerWidth * times,
                behavior: "smooth",
            });
        } else {
            scrollTo(screens[index], true)
        }
    };

    const scrollEventHandler = () => {
        if (!(screenWidth > 450 && screenHeight > 680)) {
            for (let i = 0; i < screens.length; i++) {
                if (isScrolledIntoView(screens[i])) {
                    setCurrent(i);
                    break;
                }
            }
        }
    }

    useEffect(() => {

        window.document.addEventListener("scroll", scrollEventHandler);

        return () => {
            window.document.removeEventListener("wheel", scrollEventHandler);
        };
    }, []);

    const renderLinks = () => {
        return links.map((link, index) => (
            <>
                <div
                    onClick={() => handleOnLinkClick(index)}
                    className={`link ${isActive(index) ? "active" : ""}`}
                >
                    {link}
                </div>
                {index !== links.length - 1 && <span>|</span>}
            </>
        ));
    };

    return (
        <div className="container">
            <div className="navbar">
                {screenWidth > 850 && (
                    <div className="title">
                        <img src={navbarTitle} alt="pixel patties"/>
                    </div>
                )}
                <div className="links">{renderLinks()}</div>
            </div>
            {(screenWidth > 450 && screenHeight > 680) ? (
                <>
                    <Navigation
                        onUpdate={(index) => setCurrent(index)}
                        currentScreen={currentScreen}
                        screens={screens}
                    >
                        {renderScreens()}
                    </Navigation>
                </>
            ) : (
                renderScreens()
            )}
        </div>
    );
}

export default App;
