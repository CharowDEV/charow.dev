import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Icon, IconNames } from "components/utils/Icon/Icon";

export default {
    title: "Icons",
    component: Icon,
    parameters: {
        layout: "fullscreen",
    },
} as ComponentMeta<typeof Icon>;

export const SVGIcons = () => {
    return (
        <>
            <h2>SVG Icons</h2>
            <div className="sb-tiles">
                {IconNames.map((code: any, index) => {
                    console.log(code);
                    return (
                        <div className="sb-iconswatch" key={index}>
                            <span className={`sb-iconswatch__sprite icon`}><Icon name={code} /></span>
                            <code className="sb-iconswatch__text">{code}</code>
                        </div>
                    );
                })}
            </div>
        </>
    );
};