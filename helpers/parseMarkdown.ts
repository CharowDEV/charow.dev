import matter from "gray-matter";

export const parseMarkdown = (content: string) => {
    const parsedMarkdown = matter(content);

    return {
        metadata: parsedMarkdown.data,
        content: parsedMarkdown.content,
    };
};
