const path = require("path");

module.exports = {
    stories: ["../**/*.stories.@(js|jsx|ts|tsx)", "../**/*.stories.mdx"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-postcss",
        "storybook-addon-next-router",
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    staticDirs: ["../public"],
    // Temp fix for unsupported next/link in nextjs13, see: https://github.com/lifeiscontent/storybook-addon-next-router/pull/67
    env: (config) => ({
        ...config,
        __NEXT_NEW_LINK_BEHAVIOR: true,
    }),
    webpackFinal: async (config, { configType }) => {
        config.resolve.modules.push(path.resolve(__dirname, "../"));
        return config;
    },
};
