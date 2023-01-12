import fs from 'fs';
import Head from 'next/head';
import { findDirectoryOfPost, getBlogArticleNames } from '../../components/getBlogArticles';
import Image from 'next/image';
import { parseMarkdown } from 'helpers/parseMarkdown';
import { Markdown } from 'components/utils/Markdown';
import { ArticleMetadata } from 'components/ArticleMetadata';
import { formatDate } from 'components/helpers/formatDate';
import { estimateReadingTime } from 'components/helpers/estimateReadingTime';
import { ArticleType } from 'typings/ArticleType';
import { ShareOnSocials } from 'components/socials/ShareOnSocials';
import { EmbeddedTweet } from 'components/discussOnTwitter/EmbeddedTweet';
import { useEffect, useRef, useState } from 'react';
import { useExternalScript } from 'components/hooks/useExternalScript';
import { CreateNewTweet } from 'components/discussOnTwitter/CreateNewTweet';
import { discussOnTwitterTooltip } from 'components/utils/Tooltip/Labels';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

declare global {
    interface Window {
        twttr: any;
    }
}

const ArticlePage = ({ metadata, content }: ArticleType) => {
    const title = `${metadata.title} • Charow`;
    const formattedDate = formatDate(metadata.date);
    const estimatedReadingTime = estimateReadingTime(content);
    const { error, isLoaded: scriptIsLoaded } = useExternalScript('https://platform.twitter.com/widgets.js');
    console.log('check', metadata.discussOnTwitterId);

    useEffect(() => {
        const discussOnTwitterContainer = document.getElementById('discuss-on-twitter-container');
        if (window.twttr !== undefined) {
            window.twttr.widgets.load(discussOnTwitterContainer);
        }
    }, [scriptIsLoaded]);

    return (
        <>
            <div>
                <Head>
                    <title>{title}</title>
                </Head>

                <Image
                    src={metadata.banner}
                    alt="Article thumbnail"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-56 w-full object-cover lg:h-96"
                    priority
                />

                <section className="container mb-12 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-[1fr_minmax(0,_700px)_1fr]">
                    <ShareOnSocials
                        url={`https://charow.dev/blog/${metadata.slug}`}
                        text={metadata.title}
                        platforms={['twitter', 'facebook', 'linkedin', 'whatsapp']}
                    />

                    <div className="self-center pb-3">
                        <h1 className="h2 text-center normal-case">{metadata.title}</h1>
                        <ArticleMetadata
                            author={metadata.author}
                            authorImage={metadata.authorImage}
                            date={formattedDate}
                            readingTimeInMinutes={estimatedReadingTime}
                        />
                        <Markdown value={content} wrapper="article" openExternalLinksInNewTab />

                        <section id="discuss-on-twitter-container">
                            <div className="relative mt-14 mb-1 flex">
                                <h3 className="h5 normal-case">Discuss on Twitter</h3>

                                {(!metadata.discussOnTwitterId || !scriptIsLoaded || error) && (
                                    <>
                                        <span
                                            id="discuss-on-twitter-tooltip"
                                            className="info-icon ml-2"
                                            data-tooltip-content={discussOnTwitterTooltip}
                                        />
                                        <Tooltip
                                            anchorId="discuss-on-twitter-tooltip"
                                            className="!w-auto min-w-0  max-w-xs text-center !text-xs"
                                            clickable
                                        />
                                    </>
                                )}
                            </div>

                            <hr className="mb-8" />
                            {metadata.discussOnTwitterId && scriptIsLoaded && (
                                <EmbeddedTweet tweetId={metadata.discussOnTwitterId} articleSlug={metadata.slug} />
                            )}
                            {(!metadata.discussOnTwitterId || !scriptIsLoaded || error) && <CreateNewTweet articleSlug={metadata.slug} />}
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
};

export const getStaticPaths = async () => {
    const files = getBlogArticleNames();

    return {
        paths: files.map((filename) => ({
            params: {
                articleSlug: filename.replace('.md', '')
            }
        })),
        fallback: false
    };
};

export const getStaticProps = async ({ params: { articleSlug } }: any) => {
    const directory = findDirectoryOfPost(articleSlug);
    const fileContent = fs.readFileSync(`posts/${directory}/` + articleSlug + '.md').toString();
    const currentArticle = parseMarkdown(fileContent);

    return {
        props: {
            metadata: currentArticle.metadata,
            content: currentArticle.content
        }
    };
};

export default ArticlePage;
