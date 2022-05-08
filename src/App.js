import "./App.scss";
import LoadingScreen from "./screens/LoadingScreen";
import HorizontalScroll from "react-scroll-horizontal";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

function App() {
  return (
    <div className="container">
      <HorizontalScroll pageLock={true} reverseScroll>
        <LoadingScreen />
        <HomeScreen />
        <AboutScreen />
      </HorizontalScroll>
    </div>
  );
}

export default App;
