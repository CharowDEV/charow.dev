import React from "react";
import { ComponentMeta } from "@storybook/react";

import { Header } from "../Header";

export default {
    title: "Layout/Header",
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
} as ComponentMeta<typeof Header>;

export const Primary = () => <Header />;