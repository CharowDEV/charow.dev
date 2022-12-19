import prism from "prismjs";
import { marked } from "marked";
import { useEffect, useState } from "react";
import "prismjs/components/prism-css.min";
import "prismjs/components/prism-scss.min";
import "prismjs/components/prism-solidity.min";
import "prismjs/components/prism-javascript.min";
import "prismjs/components/prism-typescript.min";
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-tsx.min";
import "prismjs/components/prism-markdown.min";
import "prismjs/components/prism-json.min";

type MarkdownParserProps = {
    value: string;
    wrapper?: React.ElementType;
    openExternalLinksInNewTab?: boolean;
};

export const Markdown = (props: MarkdownParserProps) => {
    const { value, wrapper, openExternalLinksInNewTab } = props;
    const [isRendered, setIsRendered] = useState(false);
    const Wrapper = wrapper ? wrapper : "div";
    const renderer = new marked.Renderer();

    useEffect(() => {
        setIsRendered(true);
        prism.highlightAll();
    }, [isRendered]);

    if (openExternalLinksInNewTab) {
        renderer.link = (href, title, text) => `<a href="${href}" title="${title}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    }

    const markdown = marked(value, { renderer: renderer });

    return <Wrapper className="rich-article" dangerouslySetInnerHTML={{ __html: isRendered && markdown }} />
};
