import { useState, useEffect } from "react"

const useDelayUnmount = (isMounted, timeDelay) => {
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        let timeoutId

        if (isMounted && !shouldRender) {
            setShouldRender(true);
        }

        if (!isMounted && shouldRender) {
            timeoutId = setTimeout(
                () => setShouldRender(false),
                timeDelay
            );
        }
        return () => clearTimeout(timeoutId)
    }, [isMounted, timeDelay, shouldRender])

    return shouldRender;

}

export default useDelayUnmount
