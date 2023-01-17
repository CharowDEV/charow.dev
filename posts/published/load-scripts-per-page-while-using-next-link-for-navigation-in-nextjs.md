---
slug: 'load-scripts-per-page-while-using-next-link-for-navigation-in-nextjs'
date: '2023-01-17'
title: 'Load scripts per page while using next/link for navigation in NextJS'
description: 'A custom hook to load scripts in NextJS projects that uses the built-in Link component.'
author: 'Charow'
authorImage: '/images/profilePictures/profile-picture.jpg'
banner: '/articleMedia/load-scripts-per-page-while-using-next-link-for-navigation-in-nextjs/compass.jpg'
bannerAlt: 'Silver and black round analog watch'
bannerCaption: ''
bannerCaptionLink: ''
discussOnTwitterId: ''
---

A common [issue](https://github.com/vercel/next.js/discussions/17919) in NextJS projects is that the `Script` component does not work on page changes when the project uses the built-in `Link` component for navigation. It only works on initial load and reload. One way to solve this problem is to replace the `Link` component with a regular `anchor` element, but this can result in drawbacks such as slower loading times. To overcome this I built a custom hook that allows for loading external scripts on specific pages and/or after page changes.

The custom hook, named `useExternalScript`, takes in a single argument, the URL of the external script that needs to be loaded. It then uses the React hooks `useEffect` and `useState` to handle the loading and error state of the script.

The following code snippet shows the implementation of the custom hook:

```tsx
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
```

The useEffect hook is used to create a new script element and append it to the document head. The script's src attribute is set to the URL passed in as an argument, and the async attribute is set to true. This allows the script to be loaded asynchronously, without blocking the rest of the page from loading.

The `onload` and `onerror` events are used to handle the loading and error state of the script which will be returned by the hook later on.

It ends with a return function that is used to remove the script element from the document head when the actual component is unmounted. This ensures that the script is not loaded multiple times on page changes.

The hook can be used in any component that needs to load an external script. For example, if you need to load the Google Maps API, you can use it like this:

```tsx
import { useExternalScript } from './useExternalScript';

const MyComponent = () => {
    const { isLoaded, error } = useExternalScript('https://maps.googleapis.com/maps/api/js');

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occurred while loading the script.</div>;
    }

    return <div>The script has been loaded.</div>;
};
```

 To handle multiple scripts, rename the states by doing: 
 ```tsx 
 const { isLoaded: isGoogleScriptLoaded, error: isGoogleScriptError } = useExternalScript('https://maps.googleapis.com/maps/api/js');
 const { isLoaded: isFacebookScriptLoaded, error: isFacebookScriptError } = useExternalScript('https://connect.facebook.net/en_US/sdk.js');
 ```

## In conclusion
The custom hook makes it possible to load scripts on specific pages in NextJS projects that uses the `Link` component for navigation. Resulting in a better user experience and improved performance by avoiding loading multiple scripts on page changes.