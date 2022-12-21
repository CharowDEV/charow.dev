import { Icon, IconNames } from 'components/utils/Icon/Icon';
import charow from '../../assets/charow.json';

type MySocialsProps = {
    className?: string;
};

export const MySocials = (props: MySocialsProps) => {
    const { className } = props;

    return (
        <ul className={`${className}  flex justify-end gap-2 lg:flex-1`}>
            {charow.socials.map((social) => (
                <li key={social.name}>
                    <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-md p-2 duration-150 ease-in-out hover:bg-white hover:text-secondary hover:shadow-soft active:text-secondary-dark"
                    >
                        <Icon name={social.name.toLowerCase() as typeof IconNames[number]} />
                    </a>
                </li>
            ))}
        </ul>
    );
};
