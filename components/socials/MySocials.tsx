import { Icon, IconNames } from "components/utils/Icon/Icon";
import charow from "../../assets/charow.json";

type MySocialsProps = {
    className?: string;
};

export const MySocials = (props: MySocialsProps) => {
    const { className } = props;

    return (
        <ul className={`${className} flex lg:flex-1 justify-end lg:gap-1`}>
            {charow.socials.map((social) => (
                <li key={social.name}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="block p-3 text-slate-500 ease-in-out duration-150 rounded-md hover:text-secondary hover:bg-white hover:shadow-soft active:text-secondary-dark">
                        <Icon name={social.name.toLowerCase() as typeof IconNames[number]} />
                    </a>
                </li>
            ))}
        </ul>
    );
};
