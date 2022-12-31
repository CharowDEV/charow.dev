import '../assets/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from 'components/layout/Layout';
import { Analytics } from 'components/utils/Analytics';

function MyApp({ Component, pageProps }: AppProps) {
    const isProd = process.env.NODE_ENV === 'production';

    return (
        <>
            {isProd && <Analytics />}
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
