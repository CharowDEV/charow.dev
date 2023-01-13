import { discussOnTwitterTooltip } from 'components/utils/Tooltip/Labels';
import { Tooltip } from 'components/utils/Tooltip/Tooltip';
import { ArticleMetadataType } from 'typings/ArticleType';
import { CreateNewTweet } from './CreateNewTweet';
import { EmbeddedTweet } from './EmbeddedTweet';

type DiscussOnTwitterType = {
    shouldShowEmbeddedTweet?: string | boolean;
    error: boolean;
    discussOnTwitterId: ArticleMetadataType['discussOnTwitterId'];
    articleSlug: ArticleMetadataType['slug'];
};

export const DiscussOnTwitter = (props: DiscussOnTwitterType) => {
    const { shouldShowEmbeddedTweet, error, discussOnTwitterId, articleSlug } = props;

    return (
        <section id="discuss-on-twitter-container">
            <div className="relative mt-14 mb-1 flex">
                <h3 className="h5 normal-case">Discuss on Twitter</h3>
                {(!shouldShowEmbeddedTweet || error) && (
                    <Tooltip anchorId="discuss-on-twitter-tooltip" content={discussOnTwitterTooltip} className="ml-2" />
                )}
            </div>

            <hr className="mb-8" />

            {shouldShowEmbeddedTweet && <EmbeddedTweet tweetId={discussOnTwitterId as string} articleSlug={articleSlug} />}
            {(!shouldShowEmbeddedTweet || error) && <CreateNewTweet articleSlug={articleSlug} />}
        </section>
    );
};
