import { useEffect, useRef, useState } from "react";
import scrollTo from "../helpers/scrollTo";
const Navigation = ({ screens, children }) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const lastWheelCall = useRef(null);

  useEffect(() => {
    if (screens.every(({ current }) => current)) {
      window.document.addEventListener("wheel", ({ deltaY }) => {
        if (Math.abs(deltaY) < 10) return;

        if (
          lastWheelCall.current === null ||
          lastWheelCall.current + 300 - Date.now() < 0
        ) {
          if (deltaY > 0 && currentScreen + 1 < screens.length) {
            scrollTo(screens[currentScreen + 1]);
            return setCurrentScreen((prevState) => prevState + 1);
          }

          if (deltaY < 0 && currentScreen - 1 >= 0) {
            scrollTo(screens[currentScreen - 1]);
            return setCurrentScreen((prevState) => prevState - 1);
          }
        }

        lastWheelCall.current = Date.now();
      });
    }
  }, []);

  return <>{children}</>;
};

export default Navigation;
