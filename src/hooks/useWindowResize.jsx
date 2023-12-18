import { useEffect, useState } from "react";

const useWindowResize = (width) => {
    const [isFullWidth, setIsFullWidth] = useState(false);

    const handleResize = () => {
        const newWidth = window.innerWidth;
        setIsFullWidth(newWidth <= width);

    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { isFullWidth };
};

export default useWindowResize;
