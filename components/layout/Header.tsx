import { Popover, Transition } from "@headlessui/react";
import { MySocials } from "components/socials/MySocials";
import { Icon, IconNames } from "components/utils/Icon/Icon";
import { useSize } from "components/utils/useSize";
import Link from "next/link";
import { Fragment } from "react";
import charow from "../../assets/charow.json";

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
            <li key={item.label}>
                <a
                    href={item.href}
                    className="block py-2 px-5 w-full border-b border-gray-100 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                    {item.label}
                </a>
            </li>
        ))}
    </ul>
);

export const Header = () => {
    const size = useSize();
    const isMobile = size.width < 1024;

    return (
        <header className="bg-white border-b-2 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 uppercase">
            <Popover as="nav" className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                {({ open }) => (
                    <>
                        <Link href="/" className="flex flex-1 items-center">
                            <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Charow</div>
                        </Link>

                        {isMobile && (
                            <>
                                <Popover.Button className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                    <Icon name={open ? "close" : "hamburger"} className="w-6 h-6" />
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-0"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-0"
                                >
                                    <Popover.Panel className={`absolute flex flex-col z-10 w-full h-[calc(100vh-56px)] top-14 left-0 right-0 bg-white`}>
                                        <HeaderNavigation />
                                        <MySocials className="gap-5 mt-auto mb-16 mx-auto lg:m-0"/>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}

                        {!isMobile && (
                            <>
                                <HeaderNavigation />
                                <MySocials />
                            </>
                        )}
                    </>
                )}
            </Popover>
        </header>
    );
};
