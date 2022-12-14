---
slug: "add-syntax-highlighting-in-react-using-markdown-to-jsx-and-react-syntax-highlighter"
date: "2022-11-18"
title: "Add syntax highlighting in React using markdown-to-jsx and react-syntax-highlighter"
description: "Make code snippets in markdown easy to read by applying syntax highlighting using the markdown-to-jsx and react-syntax-highlighter packages."
author: "Charow"
pfp: "/images/profile-picture.jpg"
banner: "/media/add-syntax-highlighting-in-react-using-markdown-to-jsx-and-react-syntax-highlighter/banner.jpg"
banner_alt: "Code snippet"
banner_caption: ""
banner_caption_link: ""
---

In markdown, you can add code snippets by using the backtick character. This is a great way to add code snippets to your blog posts for example. However, it is not very easy to read. This is where syntax highlighting comes into play. You could do this easily by using the markdown-to-jsx and react-syntax-highlighter packages. 

## Check if code snippet is inline or block

The markdown-to-jsx package allows you to convert markdown to JSX. While I was using it, I found out that it does not support syntax highlighting out of the box. So I had to find a way to override a code block to add syntax highlighting. 

Natively markdown-to-jsx uses a `code` tag for inline code and it will be wrapped in a `pre` tag if it's a code block. Something we can use to our advantage, because we only want to highlight code blocks. 

To override default components we can add `markDownToJsxOptions`, like so:  

```tsx
import MarkdownToJsx from "markdown-to-jsx";
import { RichArticlePreBlock } from "./components/RichArticlePreBlock";

type MarkdownProps = {
    content: string;
};

export const Markdown = ({content}: MarkdownProps) => {
    const markDownToJsxOptions = {
        overrides: {
            pre: RichArticlePreBlock,
        }
    };

    return (
            <MarkdownToJsx options={markDownToJsxOptions}>
                {content}
            </MarkdownToJsx>
    );
};
```

In our `RichArticlePreBlock` component we have to check if `children` contains content that is of type `code`. If that's the case, we pass the content and the className to our `RichArticleCodeBlock` component, where we will highlight it using react-syntax-highlighter. Otherwise just return it as is. Because remember, we only want to highlight code that is wrapped inside a `pre` tag. 

```tsx
import { RichArticleCodeBlock } from "./RichArticleCodeBlock";

type RichArticlePreBlockProps = {
    children: JSX.Element | JSX.Element[];
};

export const RichArticlePreBlock = ({ children, ...rest }: RichArticlePreBlockProps) => {
    if ("type" in children && children["type"] === "code") {
        return RichArticleCodeBlock({ children: children["props"]["children"], className: children["props"]["className"] });
    }
    return <pre {...rest}>{children}</pre>;
};
```

## Highlight the code block
Now we know what to highlight, we can use the react-syntax-highlighter package. Highlighting the code is pretty straightforward. You just have to import `Prism` (`PrismLight` if you want to use the light build) and pass the `language` and `children` to it. You can use HighlightJS instead of PrismJS if you want. 

```tsx
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("tsx", tsx);

type RichArticleCodeBlockProps = {
    children: string;
    className: string;
};

export const RichArticleCodeBlock = ({ children, className }: RichArticleCodeBlockProps) => {
    const language = className?.replace("lang-", "");

    return (
        <SyntaxHighlighter language={language} style={oneDark}>
            {children}
        </SyntaxHighlighter>
    );
};
```

> You can also add a theme that you like if you want to. Themes for PrismJS can be found [here](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD) and for HighlightJS [here](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_HLJS.MD). If no theme is specified or the theme is not found, it will use the default one. 

As you can see I used the light build of Prism. This is because I don't want to load the entire PrismJS library. I only want to load the languages I'll use, so that the bundle size remains small. Keep in mind by using the light build you have to register the languages you want by using the `registerLanguage` function: 

```jsx
SyntaxHighlighter.registerLanguage("tsx", tsx);
```

Supported languages for PrismJS can be found [here](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD) and for HighLightJS [here](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD). 

> Note that I used react-syntax-highlighter package to highlight my code with PrismJS. You can also use PrismJS directly, but I found this package to be easier to use.