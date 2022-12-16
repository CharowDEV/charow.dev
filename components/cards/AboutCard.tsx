import { IconButton } from 'components/buttons/Buttons';
import { MySocials } from 'components/socials/MySocials';
import Image from 'next/image';
import { AboutTypes } from 'typings/AboutTypes';

export const AboutCard = (props: AboutTypes) => {
    const { profilePicture, username, contact, tags } = props;

    return (
        <div className="top-10 z-10 mx-auto max-w-[300px] -mt-32 flex h-fit flex-col items-center justify-center rounded-lg p-2.5 text-center lg:sticky lg:-mt-20 lg:bg-white">
            <div className="relative my-3 h-40 w-40 overflow-hidden rounded-full">
                <Image src={profilePicture} alt="Profile picture" layout="fill" />
            </div>

            <h2 className="h6 mt-2 normal-case text-secondary">{username}</h2>

            <ul className="footnote mt-2 flex flex-wrap justify-center gap-1">
                {tags.map((tag) => (
                    <li key={tag} className="rounded bg-slate-100 py-1 px-2 text-slate-500">
                        {tag}
                    </li>
                ))}
            </ul>

            <IconButton variant="primary" icon="mail" href={`mailto:${contact.email}`} className="mt-6">
                Get in touch
            </IconButton>

            <MySocials className="mt-4" />
        </div>
    );
};
