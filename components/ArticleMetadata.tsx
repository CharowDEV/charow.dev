import Image from 'next/image';
import Link from 'next/link';

type ArticleMetadataType = {
    author: string;
    authorImage: string;
    date: string;
    readingTimeInMinutes: number;
};

export const ArticleMetadata = (props: ArticleMetadataType) => {
    const { author, authorImage, date, readingTimeInMinutes } = props;

    return (
        <section className="mt-3 mb-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-gray-400">
            <Image src={authorImage} alt="Profile picture of author" width={0} height={0} sizes="100vw" className="h-8 w-8 rounded-full" />
            <address className="link">
                <Link href="/">{author}</Link>
            </address>
            -
            <time>
                {date} • {readingTimeInMinutes} min read
            </time>
        </section>
    );
};
