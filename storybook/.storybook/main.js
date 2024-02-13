const path = require('path');
const webpackFinal = require('./webpackFinal.js');
module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  staticDirs: [
    '../public',
    '../src/stories/assets',
    // { from: '../foo/assets', to: '/assets' },
  ],

  webpackFinal,
  core: {
    builder: 'webpack5',
  }, // builder: '@storybook/builder-webpack5',
  // builder: 'webpack5',
};
