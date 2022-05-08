import React, {useEffect, useState} from "react";

export default function LoadingDots() {

    const [numberOfDots, setNumberOfDots] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumberOfDots(prevState => {

                if (prevState === 3) {
                    return 1;
                }

                return prevState + 1;
            })
        }, 500)

        return () => {
            clearInterval(interval)
        }
    }, []);


    return ([...Array(numberOfDots)].map(() => <span>.</span>))
}
