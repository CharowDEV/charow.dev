import { useEffect, useState } from 'react';

export const useExternalScript = (url: string) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.head.appendChild(script);
        
        script.onload = () => setIsLoaded(true);
        script.onerror = () => setError(true);

        return () => {
            document.head.removeChild(script);
        };
    }, [url]);

    return {
        isLoaded,
        error
    };
};
