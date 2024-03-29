import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss-modules';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';
import url from 'rollup-plugin-url';

const globals = {
  react: 'React',
  classnames: 'classNames',
  lodash: '_',
  'html-react-parser': 'htmlParser',
  'mdfin-simple-link': 'SimpleLink',
};
const external = [
  'react',
  'react-dom',
  'classnames',
  'lodash',
  'html-react-parser',
  'mdfin-simple-link',
];
const input = 'src/index.ts';
const globalPlugins = [
  peerDepsExternal(),
  babel({ exclude: 'node_modules/**', babelHelpers: 'runtime' }),
  typescript(),
  json(),
  url({ include: ['**/*.svg'] }),
];
const name = 'ContentSwitcher';

export default [
  {
    input,
    external,
    output: {
      globals,
      file: 'dist/index.es.js',
      format: 'es',
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
            src: ['src/scss/*', `!**/${name}.scss`],
            dest: './dist/scss',
          },
        ],
      }),
    ],
  },
  {
    input,
    external,
    output: {
      name,
      globals,
      file: 'dist/index.umd.min.js',
      format: 'umd',
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
