import { Icon, IconNames } from "components/utils/Icon/Icon";

type ButtonProps = {
    children: React.ReactNode;
    variant: "primary" | "secondary" | "text";
    href?: string;
    className?: string;
};

type IconButtonProps = ButtonProps & {
    icon: typeof IconNames[number];
};

const btn = "text-sm text-white text-center fill-current uppercase py-2 px-4 rounded-md hover:ease-in-out duration-150";
const getButtonVariant = (variant: ButtonProps["variant"]) => {
    switch (variant) {
        case "primary":
            return "bg-primary hover:bg-secondary active:bg-secondary/50";
        case "secondary":
            return "bg-secondary";
        case "text":
            return "";
    }
};

export const IconButton = (props: IconButtonProps) => {
    const { children, variant, href, className, icon } = props;

    return (
        <Button href={href} variant={variant} className={`${className} flex justify-center items-center gap-3`}>
            <Icon name={icon} />
            {children}
        </Button>
    );
};

const Button = (props: ButtonProps) => {
    const { children, variant, href, className } = props;

    if (href) {
        return (
            <a href={href} className={`${btn} ${getButtonVariant(variant)} ${className}`}>
                {children}
            </a>
        );
    }

    return <button className={`${btn} ${getButtonVariant(variant)} ${className}`}>{children}</button>;
};
