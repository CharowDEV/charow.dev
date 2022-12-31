export const loadExternalScript = (url: string) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script) };
};
