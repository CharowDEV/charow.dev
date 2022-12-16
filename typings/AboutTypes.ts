type SocialsTypes = {
    name: string;
    username: string;
    url: string;
}

export type AboutTypes = {
    username: string;
    name: string;
    profilePicture: string;
    contact: {
        email: string;
        phone: string;
    };
    tags: string[];
    socials: SocialsTypes[];
}
