require('@root/scss/index.scss');

const { scssConstants } = require('mdfin-theme');

module.exports = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: [
          'themes',
          'hocs',
          'atoms',
          'widgets',
          'molecules',
          'organisms',
          'templates',
          'pages',
          'playground',
        ],
      },
    },
    /* controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }, */
    viewport: {
      viewports: {
        xxs: {
          name: `XXS Mobile [${scssConstants.xxs} X ${scssConstants.xs}]`,
          styles: { width: scssConstants.xxs, height: scssConstants.xs },
        },
        xs: {
          name: `XS Mobile [${scssConstants.xs} X 720px]`,
          styles: { width: scssConstants.xs, height: '720px' },
        },
        sm: {
          name: `SM Mobile [${scssConstants.sm} X ${scssConstants.lg}]`,
          styles: { width: scssConstants.sm, height: scssConstants.lg },
        },
        md: {
          name: `MD Mobile [${scssConstants.md} X 1024px]`,
          styles: { width: '769px', height: '1024px' },
        },
        lg: {
          name: `LG Tablet [1280px X ${scssConstants.lg}]`,
          styles: { width: '1280px', height: scssConstants.lg },
        },
        xl: {
          name: `XL Desktop [${scssConstants.xxl} X ${scssConstants.xl}]`,
          styles: { width: scssConstants.xxl, height: scssConstants.xl },
        },
        xxl: {
          name: `XXL High definition screen  [1600px X ${scssConstants.xxl}]`,
          styles: { width: '1600px', height: scssConstants.xxl },
        },
      },
    },
  },
};
