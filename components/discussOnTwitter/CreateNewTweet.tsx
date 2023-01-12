import { getShareUrl } from 'components/socials/ShareOnSocials';
import { useState } from 'react';
import charow from '../../assets/charow.json';

const maxCharacters = 280;
const shortenedUrlCharacterCount = 23; // A URL of any length will be altered to 23 characters on Twitter: https://help.twitter.com/en/using-twitter/how-to-tweet-a-link

type CreateTweetType = {
    articleSlug: string;
};

export const CreateNewTweet = ({ articleSlug }: CreateTweetType) => {
    const [textarea, setTextarea] = useState('');
    const blogArticleUrl = `https://charow.dev/blog/${articleSlug}`;
    const twitterUsername = charow.socials.find((social) => social.name.toLowerCase() === 'twitter')?.username;
    const additionalText = `\xa0${blogArticleUrl.slice(0, shortenedUrlCharacterCount)} via @${twitterUsername}\xa0`;
    const totalCharactersLeft = maxCharacters - textarea.length - additionalText.length;
    const totalCharactersLeftIsNegative = totalCharactersLeft <= 0;
    const totalCharactersLeftIsBelow20 = totalCharactersLeft <= 20 && totalCharactersLeft > 0;

    const handleSubmit = (event: { preventDefault: () => void }) => {
        const url = getShareUrl('twitter', `https://charow.dev/blog/${articleSlug}`, textarea);
        window.open(url, '_blank');
        event.preventDefault();
    };

    return (
        <div>
            <form className="mx-auto flex max-w-[550px] flex-col gap-2" onSubmit={handleSubmit}>
                <div>
                    <textarea
                        value={textarea}
                        placeholder="Let me know your thoughts on Twitter"
                        onChange={(e) => setTextarea(e.target.value)}
                        rows={3}
                        className={'w-full rounded border border-gray-300 p-2 outline-[#1d9cf0]'}
                    />
                </div>
                <div className="flex items-center gap-2 self-end">
                    <span
                        className={`text-sm ${totalCharactersLeftIsNegative ? 'text-error' : 'text-gray-500'} ${
                            totalCharactersLeftIsBelow20 ? 'text-warning' : ''
                        }`}
                    >
                        {totalCharactersLeft}
                    </span>
                    <input
                        className={'btn bg-[#1d9cf0] normal-case hover:bg-[#1a8cd8] active:bg-[#1d9cf0]/80'}
                        type="submit"
                        value="Tweet"
                    />
                </div>
            </form>
        </div>
    );
};
