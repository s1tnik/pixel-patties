import { useCallback, useEffect, useRef } from "react";
import scrollTo from "../helpers/scrollTo";
const Navigation = ({ screens, children }) => {
  const currentScreen = useRef(0);
  const lastWheelCall = useRef(null);

  const scrollNavigation = useCallback(
    ({ deltaY }) => {
      if (
        lastWheelCall.current === null ||
        lastWheelCall.current + 500 - Date.now() < 0
      ) {
        lastWheelCall.current = Date.now();

        if (deltaY > 0 && currentScreen.current < screens.length - 1) {
          scrollTo(screens[currentScreen.current + 1]);
          currentScreen.current = currentScreen.current + 1;
        }

        if (deltaY < 0 && currentScreen.current > 0) {
          scrollTo(screens[currentScreen.current - 1]);
          currentScreen.current = currentScreen.current - 1;
        }
      }
    },
    [currentScreen.current, screens]
  );

  useEffect(() => {
    if (screens.every(({ current }) => current)) {
      window.document.addEventListener("wheel", scrollNavigation);
    }

    return () => window.document.removeEventListener("wheel", scrollNavigation);
  }, []);

  return <>{children}</>;
};

export default Navigation;
