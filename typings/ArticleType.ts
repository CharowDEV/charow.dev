export type ArticleMetadataType = {
    slug: string;
    date: Date;
    title: string;
    description: string;
    author: string;
    authorImage: string;
    banner: string;
    bannerAlt: string;
    bannerCaption?: string;
    bannerCaptionLink?: string;
    discussOnTwitterId?: string;
};

export type ArticleType = {
    metadata: ArticleMetadataType;
    content: string;
};
