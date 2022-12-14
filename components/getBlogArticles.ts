import fs from "fs";
import { parseMarkdown } from "helpers/parseMarkdown";

const publishedPosts = fs.readdirSync("posts/published");
const draftPosts = fs.readdirSync("posts/drafts");
const shouldShowDrafts = process.env.NODE_ENV === "development" && process.env.SHOW_DRAFTS === "true";

const getPublishedPosts = () =>
    publishedPosts.map((file) => {
        const fileContent = fs.readFileSync(`posts/published/` + file).toString();
        return parseMarkdown(fileContent);
    });

const getDraftPosts = () =>
    draftPosts.map((file) => {
        const fileContent = fs.readFileSync(`posts/drafts/` + file).toString();
        return parseMarkdown(fileContent);
    });

export const getBlogArticles = () => {
    const posts = getPublishedPosts();
    if (shouldShowDrafts) {
        posts.push(...getDraftPosts());
    }
    return posts;
};

export const getBlogArticleNames = () => {
    const posts = publishedPosts;
    if (shouldShowDrafts) {
        posts.push(...draftPosts);
    }
    return posts;
};

export const findDirectoryOfPost = (file: string) => {
        const posts = fs.readdirSync("posts");
        const parentDirectory = posts.find((directory) => {
            const files = fs.readdirSync("posts/" + directory);
            return files.includes(file + ".md") ? directory : null;
        });
        return parentDirectory;
};
