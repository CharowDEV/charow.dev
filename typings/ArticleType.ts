type ArticleMetadataType = {
    slug: string;
    date: Date;
    title: string;
    description: string;
    published: boolean;
    banner: string;
    author: string;
    pfp: string;
};

export type ArticleType = {
    metadata: ArticleMetadataType;
    content: string;
};
