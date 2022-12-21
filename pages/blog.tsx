import { AboutCard } from 'components/cards/AboutCard';
import { ArticleCards } from 'components/cards/ArticleCard';
import { getBlogArticles } from 'components/getBlogArticles';
import { HeroBanner } from 'components/HeroBanner';
import type { NextPage } from 'next';
import Head from 'next/head';
import AboutInfo from '../assets/charow.json';

const Home: NextPage = ({ blogaArticlesSortedByDate }: any) => {
    return (
        <>
            <Head>
                <title>Blog • Charow</title>
                <meta name="description" content="A blog where I share my code-related learnings within the web2 and web3 space" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeroBanner />

            <div className="container flex max-w-screen-2xl flex-col gap-10 lg:flex-row">
                <AboutCard {...AboutInfo} />
                <ArticleCards articles={blogaArticlesSortedByDate} />
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const posts = getBlogArticles();
    const blogaArticlesSortedByDate = posts.sort((a, b) => Number(new Date(b.metadata.date)) - Number(new Date(a.metadata.date)));

    return {
        props: { blogaArticlesSortedByDate }
    };
};

export default Home;
