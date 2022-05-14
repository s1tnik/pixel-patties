import "./App.scss";
import HomeScreen from "./screens/home/HomeScreen";
import RoadMapScreen from "./screens/roadmap/RoadMapScreen";
import useWindowSize from "./hooks/useWindowSize";
import { useCallback, useRef } from "react";
import Navigation from "./components /Navigation";
import SneakPeaksScreen from "./screens/sneakpeaks/SneakPeaksScreen";
import TeamScreen from "./screens/team/TeamScreen";
import FAQScreen from "./screens/faq/FAQScreen";
import navbarTitle from "./assets /images/navbar-title.png";

const links = ["home", "about", "roadmap", "team", "faq"];

function App() {
  const { width: screenWidth } = useWindowSize();

  const homeContainer = useRef(null);
  const aboutContainer = useRef(null);
  const sneakPeaksContainer = useRef(null);
  const teamContainer = useRef(null);
  const faqContainer = useRef(null);

  const currentScreen = useRef(0);

  let screens = [
    homeContainer,
    aboutContainer,
    sneakPeaksContainer,
    teamContainer,
    faqContainer,
  ];

  const renderScreens = () => (
    <>
      {/*<LoadingScreen />*/}
      <HomeScreen ref={homeContainer} />
      <RoadMapScreen ref={aboutContainer} />
      <SneakPeaksScreen ref={sneakPeaksContainer} />
      <TeamScreen ref={teamContainer} />
      <FAQScreen ref={faqContainer} />
    </>
  );

  const isActive = (index) => {
    return index === currentScreen.current;
  };

  const renderLinks = useCallback(() => {
    return links.map((link, index) => (
      <>
        <div className={`link ${isActive(index) ? "active" : ""}`}>{link}</div>
        {index !== links.length - 1 && <span>|</span>}
      </>
    ));
  }, [currentScreen]);

  return (
    <div className="container">
      {screenWidth > 450 ? (
        <>
          <div className="navbar">
            <div className="title">
              <img src={navbarTitle} alt="pixel patties" />
            </div>
            <div className="links">{renderLinks()}</div>
          </div>
          <Navigation currentScreen={currentScreen} screens={screens}>
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
