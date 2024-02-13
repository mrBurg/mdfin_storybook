import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss-modules';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';
// import font from 'rollup-plugin-font';
// import _ from 'lodash';

/* const fontsList = [
  'Calibri-Bold.svg',
  'Calibri-BoldItalic.svg',
  'Calibri-Italic.svg',
  'Calibri-Light.svg',
  'Calibri-LightItalic.svg',
  'Calibri-Regular.svg',
  'NunitoSans-Black.svg',
  'NunitoSans-BlackItalic.svg',
  'NunitoSans-Bold.svg',
  'NunitoSans-BoldItalic.svg',
  'NunitoSans-ExtraBold.svg',
  'NunitoSans-ExtraBoldItalic.svg',
  'NunitoSans-ExtraLight.svg',
  'NunitoSans-ExtraLightItalic.svg',
  'NunitoSans-Italic.svg',
  'NunitoSans-Light.svg',
  'NunitoSans-LightItalic.svg',
  'NunitoSans-Regular.svg',
  'NunitoSans-SemiBold.svg',
  'NunitoSans-SemiBoldItalic.svg',
  'Raleway-Black.svg',
  'Raleway-Bold.svg',
  'Raleway-Medium.svg',
  'Raleway-Regular.svg',
  'Raleway-SemiBold.svg',
]; */
const input = 'src/index.ts';
const globalPlugins = [
  peerDepsExternal(),
  babel({ exclude: 'node_modules/**', babelHelpers: 'runtime' }),
  typescript(),
  json(),
];
const name = 'Theme';

// function getFonts() {
//   return _.map(fontsList, (item) =>
//     font({
//       svg: `./assets/fonts/${item.split('-')[0]}/${item}`,
//       /* css: {
//         name: 'index',
//       }, */
//       output: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
//     })
//   );
// }

export default [
  {
    input,
    output: {
      file: 'dist/index.es.js',
      format: 'es',
      assetFileNames: (assetInfo) =>
        `fonts/${assetInfo.name.split('-')[0]}/${assetInfo.name}`,
    },
    plugins: [
      ...globalPlugins,
      postcss({
        use: ['sass'],
        extract: `css/${name}.css`,
        modules: true,
        sourceMap: true,
        plugins: [autoprefixer()],
      }),
      // ...getFonts(),
      copy({
        targets: [
          {
            src: 'src/@types',
            dest: './',
          },
          {
            src: `src/scss/${name}.scss`,
            dest: './dist/scss',
            rename: `${name}.module.scss`,
          },
          {
            src: `src/scss/${name}.scss`,
            dest: './dist/scss',
          },
          {
            src: ['src/scss/*', `!**/${name}.scss`],
            dest: './dist/scss',
          },
          {
            // src: 'dist/fonts',
            src: 'assets/fonts',
            dest: './../../storybook/public',
          },
        ],
        hook: 'writeBundle',
      }),
    ],
  },
  {
    input,
    output: {
      name,
      file: 'dist/index.umd.min.js',
      format: 'umd',
      indent: false,
    },
    plugins: [
      ...globalPlugins,
      postcss({
        use: ['sass'],
        sourceMap: true,
        plugins: [autoprefixer()],
      }),
      terser(),
    ],
  },
];
