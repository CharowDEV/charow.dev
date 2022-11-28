import React from "react";
import loadable from "@loadable/component";

export const IconNames = ["bell", "clock", "facebook", "github", "instagram", "linkedin", "moon", "mail", "sun", "twitter", "whatsapp"] as const;

interface IconProps {
    name: typeof IconNames[number];
    className?: string;
}

export const Icon: React.FC<IconProps> = React.memo(({ name, className }) => {
    const iconClass = `icon icon--${name} ${className ? className : ""} w-4 h-4`;

    if (!name || !IconNames.includes(name)) {
        return null;
    }

    const IconComponent = loadable(() => import(`./icons/${name}`), {
        resolveComponent: (components) => {
            const icon = React.cloneElement(components.default(), { className: `${iconClass}` });
            return () => icon;
        },
    });

    return <IconComponent />;
});
