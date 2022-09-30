module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-tailwind-dark-mode",
    "@storybook/preset-create-react-app",
  ],
  previewHead: (head) => `
    ${head}
    <style>
      html, body {
        height: 100%;
      }
      .dark {
        background: #000000;
      }
    </style>
  `,
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
