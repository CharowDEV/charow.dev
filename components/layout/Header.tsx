import { Popover, Transition } from '@headlessui/react';
import { MySocials } from 'components/socials/MySocials';
import { Icon } from 'components/utils/Icon/Icon';
import { useSize } from 'components/utils/useSize';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

type HeaderNavigationType = {
    isModalOpen?: boolean;
    closeModal: () => void;
}

const navItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Blog',
        href: '/blog'
    }
];

export const Header = () => {
    const size = useSize();
    const isMobile = size.width < 1024;

    // Uncomment the following lines to enable the mobile navigation and remove <MySocials /> on line 42

    return (
        <header className="sticky top-0 z-50 h-12 border-b-2 border-gray-200  bg-white py-2">
            <Popover as="nav" className="container mx-auto flex h-full max-w-[1700px] flex-wrap items-center justify-between ">
                {({ open, close }) => (
                    <>
                        <div className=" flex flex-1 items-center lg:ml-3">
                            <Link href="/">
                                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Charow</span>
                            </Link>
                        </div>

                        <MySocials />

                        {/* {!isMobile && (
                            <>
                                <HeaderNavigation closeModal={close} />
                                <MySocials />
                            </>
                        )}
                        {isMobile && <MobileNavigation isModalOpen={open} closeModal={close} />} */}
                    </>
                )}
            </Popover>
        </header>
    );
};

const HeaderNavigation = ({ closeModal }: HeaderNavigationType) => {
    const path = useRouter().pathname;
    const isActive = (href: string) => path === href;

    return (
        <ul className="mt-4 flex flex-col text-sm font-bold text-slate-300 lg:mt-0 lg:flex-row lg:space-x-8">
            {navItems.map((item) => (
                <li key={item.label}>
                    <Link
                        href={item.href}
                        onClick={closeModal}
                        className={`${
                            isActive(`/${item.label.toLowerCase()}`) ? 'text-primary' : 'text-slate-300'
                        } block w-full border-b  border-gray-100 py-2 px-5 duration-150 ease-in-out  hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primary`}
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

const MobileNavigation = ({ isModalOpen, closeModal }: HeaderNavigationType) => (
    <>
        <Popover.Button className="rounded p-1 text-primary hover:bg-gray-100 focus:outline-none">
            <Icon name={isModalOpen ? 'close' : 'hamburger'} className="h-5 w-5" />
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
            <Popover.Panel className={`fixed top-12 left-0 right-0 bottom-0 z-50 flex flex-col bg-white`}>
                <HeaderNavigation closeModal={closeModal} />
                <MySocials className="mx-auto mt-auto mb-16 gap-5 lg:m-0" />
            </Popover.Panel>
        </Transition>
    </>
);
