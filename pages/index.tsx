import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    // currently redirects to /blog by using middleware.ts

    return (
        <>
            <Head>
                <title>Charow • DEV</title>
                <meta name="description" content="A webapp for sharing my web2.0 and web3.0 code-related learnings." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div></div>
        </>
    );
};

export default Home;
