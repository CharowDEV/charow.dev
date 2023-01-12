import charow from '../../assets/charow.json';
import { CreateNewTweet } from './CreateNewTweet';

type EmbeddedTweetType = {
    tweetId: string;
    articleSlug: string;
};

export const EmbeddedTweet = (props: EmbeddedTweetType) => {
    const { tweetId, articleSlug } = props;
    const twitterUsername = charow.socials.find((social) => social.name.toLowerCase() === 'twitter')?.username;

    return (
        <blockquote className="twitter-tweet tw-align-center" data-theme="light" data-lang="en">
            <CreateNewTweet articleSlug={articleSlug} />
            <a href={`https://publish.twitter.com/oembed?url=https://twitter.com/${twitterUsername}/status/${tweetId}`} />
        </blockquote>
    );
};
