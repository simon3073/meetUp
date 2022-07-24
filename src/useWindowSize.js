import { useLayoutEffect, useState } from 'react';

// hook to detect window size on resize
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const handleSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    useLayoutEffect(() => {
        handleSize();
        window.addEventListener('resize', handleSize);
        return () => window.removeEventListener('resize', handleSize);
    }, []);
    return windowSize;
};

export default useWindowSize;
