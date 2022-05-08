import "./App.scss";
import burgerLoading from "./assets /burger-loading.gif";
import LoadingDots from "./components /LoadingDots";

function App() {
  return (
    <div className="container">
      <div className="loading-container">
        <div className="img-container">
          <img src={burgerLoading} alt="loading" />
        </div>
        <div className="heading-container">
          <p className="heading">Cooking something</p>
          <div className="loading-dots">
            <LoadingDots />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
