import { getBlogArticles } from "components/getBlogArticles";
import { HeroBanner } from "components/HeroBanner";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = ({ blogaArticlesSortedByDate }: any) => {

    return (
        <>
            <Head>
                <title>Blog • Charow</title>
                <meta name="description" content="A blog where I share my code-related learnings within the web2 and web3 space" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <HeroBanner />

                <div className="home__content container container--1600">
                    {/* <CardAbout {...AboutInfo} /> */}
                    {/* <ArticleCardsList articles={blogaArticlesSortedByDate} /> */}
                </div>
            </main>
        </>
    );
};

export const getStaticProps = async () => {
    const posts = getBlogArticles();
    const blogaArticlesSortedByDate = posts.sort((a, b) => Number(new Date(b.metadata.date)) - Number(new Date(a.metadata.date)));

    return {
        props: { blogaArticlesSortedByDate },
    };
};

export default Home;
