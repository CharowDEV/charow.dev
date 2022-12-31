import { useEffect, useRef, useState } from 'react';

export const useExternalScript = (url: string) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        var me = document.getElementById('twitter-script');
        if (me) {
            console.log('script el already existed');
            setIsLoaded(true);
        } else {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            script.id = 'twitter-script';
            document.body.appendChild(script);

            script.onload = () => {
                console.log('created a new script el:', script);
                setIsLoaded(true);
            };
    
            script.onerror = () => setError(true);

            return () => {
                document.body.removeChild(script);
            };
        }

        
    }, [url]);

    return {
        isLoaded,
        error
    };
};
