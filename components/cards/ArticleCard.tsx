import { ArticleType } from 'typings/ArticleType';
import Image from 'next/image';
import { formatDate } from 'components/helpers/formatDate';
import { estimateReadingTime } from 'components/helpers/estimateReadingTime';
import Link from 'next/link';

export const ArticleCards = ({ articles }: { articles: ArticleType[] }) => {
    return (
        <ol className="grid grid-cols-fill-64 gap-5">
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

export const ArticleCard = ({ content, metadata }: ArticleType) => {
    const formattedDate = formatDate(metadata.date);
    const estimatedReadingTime = estimateReadingTime(content);

    return (
        <Link
            href={'/blog/' + metadata.slug}
            className="group flex h-full flex-grow flex-col rounded-lg bg-white shadow-softer duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-soft"
        >
            <div className="relative w-full overflow-hidden rounded-t-lg pt-[56.25%]">
                <Image src={metadata.banner} alt="Article thumbnail" layout="fill" />
            </div>

            <section className="p-6">
                <h2 className="h6 flex-grow normal-case duration-200 ease-in-out group-hover:text-secondary group-active:text-secondary-dark">{metadata.title}</h2>
                <time className="footnote text-slate-400">
                    {formattedDate} • {estimatedReadingTime} min read
                </time>
                <p className="mt-3">{metadata.description}</p>
            </section>
        </Link>
    );
};
