{
  "name": "$[registration-name]",
  "version": "1.0.0",
  "description": "$[package] $[component]",
  "main": "dist/index.umd.min.js",
  "module": "dist/index.es.js",
  "types": "@types",
  "style": "dist/css/$[component].css",
  "publishConfig": {
    "cache": "cache/.npm",
    "registry": "http://3.127.182.171:808/repository/npm"
  },
  "repository": {
    "type": "git",
    "url": "https://git.finmdtest.com/creditsystem/core/creditsystem.core.front"
  },
  "author": "$[package]",
  "license": "UNLICENSED",
  "files": [
    "@types",
    "assets",
    "dist",
    "src",
    ".gitignore",
    "jestconfig.json",
    "package-lock.json",
    "package.json",
    "postcss.config.js",
    "README.md",
    "rollup.config.mjs",
    "tsconfig.json"
  ],
  "scripts": {
    "npm-init": "npm i --legacy-peer-deps",
    "npm-upgrade": "npx npm-check-updates -u",
    "npm-publish": "npm run rollup & npm publish",
    "jest-test": "jest --config jestconfig.json",
    "rollup": "rollup -c"
  },
  "devDependencies": {
    "@babel/core": "latest",
    "@rollup/plugin-babel": "latest",
    "@rollup/plugin-json": "latest",
    "@types/autoprefixer": "latest",
    "@types/jest": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "autoprefixer": "latest",
    "node-sass": "latest",
    "postcss": "latest",
    "rollup": "latest",
    "rollup-plugin-copy": "latest",
    "rollup-plugin-peer-deps-external": "latest",
    "rollup-plugin-postcss-modules": "latest",
    "rollup-plugin-terser": "latest",
    "rollup-plugin-typescript2": "latest",
    "sass": "latest",
    "ts-jest": "latest",
    "typescript": "latest"
  },
  "dependencies": {
    "classnames": "latest",
    "react": "latest",
    "react-dom": "latest"
  }
}
