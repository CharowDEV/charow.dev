import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Charow • DEV</title>
                <meta name="description" content="A webapp for sharing my web2.0 and web3.0 code-related learnings." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <ul className="flex flex-col gap-10">
                    <h1 className="h1">header1</h1>
                    <h2 className="h2">header2</h2>
                    <h3 className="h3">header3</h3>
                    <h4 className="h4">header4</h4>
                    <h5 className="h5">header5</h5>
                    <h6 className="h6">header6</h6>
                    <p className="subtitle1">subtitle1</p>
                    <p className="body1">body1</p>
                    <p className="footnote">footnote</p>
                </ul>
            </div>
        </>
    );
};

export default Home;
