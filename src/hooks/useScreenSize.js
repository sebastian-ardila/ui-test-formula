import { useState, useEffect } from "react";
const useScreenSize = () => {
    const [currentScreenWidth, setCurrentScreenWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () => setCurrentScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return {
        currentScreenWidth,
    }
}

export default useScreenSize;