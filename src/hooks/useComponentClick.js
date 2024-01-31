import { useEffect } from "react";

const useComponentClick = ({elementRef, handler}) => {

    useEffect(() => {
        const handleComponentClick = (e) => {
            if (elementRef.current && !elementRef.current.contains(e.target)) {
              handler(false);
            }
          };

        document.addEventListener("click", handleComponentClick);
    
        return () => {
          document.removeEventListener("click", handleComponentClick);
        };
      }, [elementRef, handler]);
};

export default useComponentClick;