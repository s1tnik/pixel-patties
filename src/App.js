import "./App.scss";
import LoadingScreen from "./screens/loading/LoadingScreen";
import HorizontalScroll from "react-scroll-horizontal";
import HomeScreen from "./screens/home/HomeScreen";
import AboutScreen from "./screens/about/AboutScreen";
import useWindowSize from "./hooks/useWindowSize";
import { useRef } from "react";
import Navigation from "./components /Navigation";

function App() {
  const { width: screenWidth } = useWindowSize();

  const homeContainer = useRef(null);
  const aboutContainer = useRef(null);
  let screens = [homeContainer, aboutContainer];

  const renderScreens = () => (
    <>
      {/*<LoadingScreen />*/}
      <HomeScreen ref={homeContainer} />
      <AboutScreen ref={aboutContainer} />
    </>
  );

  return (
    <div className="container">
      {screenWidth > 450 ? (
        <Navigation screens={screens}>
          <HorizontalScroll reverseScroll>{renderScreens()}</HorizontalScroll>
        </Navigation>
      ) : (
        renderScreens()
      )}
    </div>
  );
}

export default App;
