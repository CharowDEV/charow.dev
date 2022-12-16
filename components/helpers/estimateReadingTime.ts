export const estimateReadingTime = (content: string) => {
    const wpm = 225; // Average adult reading speed (words per minute).
    const words = content.trim().split(/\s+/).length; // Calculate total number of words (length) by splitting at each whitespace.
    const estimatedReadingTime = Math.ceil(words / wpm); // Calculates the read time rounded up to the nearest whole number.
    return estimatedReadingTime; 
}