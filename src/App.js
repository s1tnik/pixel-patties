import "./App.scss";
import HomeScreen from "./screens/home/HomeScreen";
import RoadMapScreen from "./screens/roadmap/RoadMapScreen";
import useWindowSize from "./hooks/useWindowSize";
import {useRef} from "react";
import Navigation from "./components /Navigation";
import SneakPeaksScreen from "./screens/sneakpeaks/SneakPeaksScreen";
import TeamScreen from "./screens/team/TeamScreen";
import FAQScreen from "./screens/faq/FAQScreen";

function App() {
    const {width: screenWidth} = useWindowSize();

    const homeContainer = useRef(null);
    const aboutContainer = useRef(null);
    const sneakPeaksContainer = useRef(null);
    const teamContainer = useRef(null);
    const faqContainer = useRef(null);

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
            <HomeScreen ref={homeContainer}/>
            <RoadMapScreen ref={aboutContainer}/>
            <SneakPeaksScreen ref={sneakPeaksContainer}/>
            <TeamScreen ref={teamContainer}/>
            <FAQScreen ref={faqContainer}/>
        </>
    );

    return (
        <div className="container">
            {screenWidth > 450 ? (
                <Navigation screens={screens}>
                    {renderScreens()}
                </Navigation>
            ) : (
                renderScreens()
            )}
        </div>
    );
}

export default App;
