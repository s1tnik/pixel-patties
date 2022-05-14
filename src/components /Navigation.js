import { useCallback, useEffect, useRef } from "react";
import scrollTo from "../helpers/scrollTo";

const Navigation = ({ screens, children, currentScreen }) => {
  const lastWheelCall = useRef(null);

  const scrollNavigation = useCallback(
    ({ deltaY }) => {
      if (
        lastWheelCall.current === null ||
        lastWheelCall.current + 1300 - Date.now() < 0
      ) {
        lastWheelCall.current = Date.now();

        if (deltaY > 0 && currentScreen.current < screens.length - 1) {
          window.document.querySelector(".scroll-navigation").scrollBy({
            top: 0,
            left: window.innerWidth,
            behavior: "smooth",
          });
          currentScreen.current = currentScreen.current + 1;
        }

        if (deltaY < 0 && currentScreen.current > 0) {
          window.document.querySelector(".scroll-navigation").scrollBy({
            top: 0,
            left: -window.innerWidth,
            behavior: "smooth",
          });
          currentScreen.current = currentScreen.current - 1;
        }
      }
    },
    [screens]
  );

  const resizeHandler = () => {
    scrollTo(screens[currentScreen.current]);
  };

  useEffect(() => {
    if (screens.every(({ current }) => current)) {
      window.document.addEventListener("wheel", scrollNavigation);
      window.addEventListener("resize", resizeHandler);
    }

    return () => {
      window.document.removeEventListener("wheel", scrollNavigation);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="scroll-navigation">
      <div className="scroll-wrapper">{children}</div>
    </div>
  );
};

export default Navigation;
