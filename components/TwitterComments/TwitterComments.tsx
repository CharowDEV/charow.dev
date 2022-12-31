// https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview

import charow from '../../assets/charow.json';

export const TwitterComments = () => {
    const tweetId = '1606010881594236928';
    const twitterUsername = charow.socials.find((social) => social.name.toLowerCase() === 'twitter')?.username;

    return (
        <section>
            <h3 className="h5 normal-case mt-14 mb-1">Discuss on Twitter</h3>
            <hr className='mb-8' />

            <blockquote className="twitter-tweet tw-align-center" data-theme="light" data-lang="en" >
                <DiscussOnTwitterButton />
                <a href={`https://publish.twitter.com/oembed?url=https://twitter.com/${twitterUsername}/status/${tweetId}&theme=dark&align=center`} />
            </blockquote>

            {/* <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                    Add syntax highlighting in React using markdown-to-jsx and react-syntax-highlighter{' '}
                    <a href="https://t.co/dWLSwhmMts">https://t.co/dWLSwhmMts</a> via{' '}
                    <a href="https://twitter.com/CharowDEV?ref_src=twsrc%5Etfw">@CharowDEV</a>
                </p>
                &mdash; Charow • Dev (@CharowDEV){' '}
                <a href="https://twitter.com/CharowDEV/status/1606010881594236928?ref_src=twsrc%5Etfw">December 22, 2022</a>
            </blockquote> */}
        </section>
    );
};

const DiscussOnTwitterButton = () => (
    <a
        href="https://twitter.com/intent/tweet?button_hashtag=Charow&ref_src=twsrc%5Etfw"
        className="twitter-hashtag-button"
        data-show-count="false"
    >
        Tweet #Charow
    </a>
)