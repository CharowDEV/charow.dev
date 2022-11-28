module.exports = {
  "stories": [
    "../**/*.stories.@(js|jsx|ts|tsx)",
    '../**/*.stories.mdx'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
    "@storybook/addon-postcss",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}