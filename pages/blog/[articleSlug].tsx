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

const ArticlePage = ({ metadata, content }: ArticleType) => {
    const title = `${metadata.title} • Charow`;
    const formattedDate = formatDate(metadata.date);
    const estimatedReadingTime = estimateReadingTime(content);

    return (
        <>
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

                <div className="self-center border-b pb-3">
                    <h1 className="h2 text-center normal-case">{metadata.title}</h1>
                    <ArticleMetadata
                        author={metadata.author}
                        authorImage={metadata.authorImage}
                        date={formattedDate}
                        readingTimeInMinutes={estimatedReadingTime}
                    />
                    <Markdown value={content} wrapper="article" openExternalLinksInNewTab />
                </div>
            </section>
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
