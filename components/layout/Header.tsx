import { Popover, Transition } from "@headlessui/react";
import { Icon, IconNames } from "components/utils/Icon/Icon";
import { useSize } from "components/utils/useSize";
import Link from "next/link";
import { Fragment } from "react";
import charow from "../../assets/Charow.json";

const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "About",
        href: "/",
    },
    {
        label: "Projects",
        href: "/",
    },
    {
        label: "Contact",
        href: "/",
    },
];

const HeaderNavigation = () => (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {navItems.map((item) => (
            <li
                key={item.label}
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
                <a href={item.href}>{item.label}</a>
            </li>
        ))}
    </ul>
);

const HeaderSocials = () => (
    <ul className="flex gap-4">
        {charow.socials.map((social) => (
            <li key={social.name}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <Icon name={social.name.toLowerCase() as typeof IconNames[number]} />
                </a>
            </li>
        ))}
    </ul>
);

export const Header = () => {
    const size = useSize();
    const isMobile = size.width < 1024;

    return (
        <header className="bg-white border-b-2 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <Popover as="nav" className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link href="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Charow Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Charow</span>
                </Link>

                {isMobile && (
                    <>
                        <Popover.Button className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className={`absolute z-10 justify-between items-center w-full h-full top-14 left-0 right-0 bg-white`}>
                                <HeaderNavigation />
                                <HeaderSocials />
                            </Popover.Panel>
                        </Transition>
                    </>
                )}

                {!isMobile && (
                    <>
                        <HeaderNavigation />
                        <HeaderSocials />
                    </>
                )}
            </Popover>
        </header>
    );
};
