import "./App.scss";
import HomeScreen from "./screens/home/HomeScreen";
import RoadMapScreen from "./screens/roadmap/RoadMapScreen";
import useWindowSize from "./hooks/useWindowSize";
import { useCallback, useRef, useState } from "react";
import Navigation from "./components /Navigation";
import AboutScreen from "./screens/about/AboutScreen";
import TeamScreen from "./screens/team/TeamScreen";
import FAQScreen from "./screens/faq/FAQScreen";
import navbarTitle from "./assets /images/navbar-title.png";
import scrollTo from "./helpers/scrollTo";

const links = ["home", "about", "roadmap", "team", "faq"];

function App() {
  const { width: screenWidth } = useWindowSize();

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
      <HomeScreen ref={homeContainer} />
      <AboutScreen ref={aboutContainer} />
      <RoadMapScreen ref={roadMapContainer} />
      <TeamScreen ref={teamContainer} />
      <FAQScreen ref={faqContainer} />
    </>
  );

  const isActive = (index) => {
    return index === current;
  };

  const handleOnLinkClick = (index) => {
    const times = index - currentScreen.current;
    currentScreen.current = index;
    setCurrent(index);

    window.document.querySelector(".scroll-navigation").scrollBy({
      top: 0,
      left: window.innerWidth * times,
      behavior: "smooth",
    });
  };

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
      {screenWidth > 450 ? (
        <>
          <div className="navbar">
            {screenWidth > 850 && (
              <div className="title">
                <img src={navbarTitle} alt="pixel patties" />
              </div>
            )}
            <div className="links">{renderLinks()}</div>
          </div>
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
