const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss'
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src')
        },
      },
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-loader',
          options: {
            additionalData: `
              @import "~bootstrap/scss/functions";
              @import "~bootstrap/scss/variables";
              @import "~bootstrap/scss/maps";
              @import "~bootstrap/scss/mixins";
              @import "~@/assets/scss/index.scss";
            `,
          },
        },
      ],
    });

    return config;
  },
}