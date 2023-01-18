import { ArticleType } from 'typings/ArticleType';
import Image from 'next/image';
import { formatDate } from 'components/helpers/formatDate';
import { estimateReadingTime } from 'components/helpers/estimateReadingTime';
import Link from 'next/link';

export const ArticleCards = ({ articles }: { articles: ArticleType[] }) => {
    return (
        <ol className="w-full grid grid-cols-fit-64 gap-4 h-fit">
            {articles.map((article: ArticleType) => {
                return (
                    <li key={article.metadata.slug}>
                        <ArticleCard {...article} />
                    </li>
                );
            })}
        </ol>
    );
};

const ArticleCard = ({ content, metadata }: ArticleType) => {
    const formattedDate = formatDate(metadata.date);
    const estimatedReadingTime = estimateReadingTime(content);

    return (
        <Link
            href={'/blog/' + metadata.slug}
            className="group flex h-full flex-col rounded-lg bg-white shadow-softer duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-soft"
        >
            <div className="relative pb-[56.25%]">
                <Image
                    src={metadata.banner}
                    alt="Article thumbnail"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full p-0.5 rounded-lg object-cover absolute"
                    priority
                />
            </div>

            <section className="pt-4 px-4 pb-2">
                <h2 className="subtitle1 normal-case duration-200 ease-in-out group-hover:text-secondary group-active:text-secondary-dark">
                    {metadata.title}
                </h2>
                <time className="footnote text-slate-400">
                    {formattedDate} • {estimatedReadingTime} min read
                </time>
            </section>
        </Link>
    );
};
