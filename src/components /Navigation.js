import {useCallback, useEffect, useRef} from "react";

const Navigation = ({screens, children}) => {
    const currentScreen = useRef(0);
    const lastWheelCall = useRef(null);

    const scrollNavigation = useCallback(
        ({deltaY}) => {
            if (
                lastWheelCall.current === null ||
                lastWheelCall.current + 1300 - Date.now() < 0
            ) {
                lastWheelCall.current = Date.now();

                if (deltaY > 0 && currentScreen.current < screens.length - 1) {
                    window.document.querySelector(".scroll-navigation").scrollBy({
                        top: 0,
                        left: window.innerWidth,
                        behavior: 'smooth'
                    })
                    currentScreen.current = currentScreen.current + 1;
                }

                if (deltaY < 0 && currentScreen.current > 0) {
                    window.document.querySelector(".scroll-navigation").scrollBy({
                        top: 0,
                        left: -window.innerWidth,
                        behavior: 'smooth'
                    })
                    currentScreen.current = currentScreen.current - 1;
                }
            }
        },
        [screens]
    );

    useEffect(() => {
        if (screens.every(({current}) => current)) {
            window.document.addEventListener("wheel", scrollNavigation);
        }

        return () => window.document.removeEventListener("wheel", scrollNavigation);
    }, []);


    return (
        <div className="scroll-navigation">
            <div className="scroll-wrapper">{children}</div>
        </div>
    );
};

export default Navigation;
