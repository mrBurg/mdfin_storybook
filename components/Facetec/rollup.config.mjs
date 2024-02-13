import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';

const globals = {
  react: 'React',
  classnames: 'classNames',
  lodash: '_',
  axios: 'axios',
  'next/script': 'Script',
  'next/image': 'Image',
};
const external = [
  'react',
  'react-dom',
  'classnames',
  'lodash',
  'next/image',
  'next/script',
  'axios',
];
const input = 'src/index.ts';
const globalPlugins = [typescript(), json()];
const name = 'Facetec';

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
        extract: `css/${name}.module.css`,
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
            src: 'assets',
            dest: './../../storybook/public',
            rename: 'facetec',
          },
        ],
        hook: 'writeBundle',
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
      indent: false,
    },
    plugins: [
      ...globalPlugins,
      postcss({
        use: ['sass'],
        extract: `css/${name}.css`,
        sourceMap: true,
        modules: false,
        plugins: [autoprefixer()],
      }),
      terser(),
    ],
  },
];
