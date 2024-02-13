const path = require('path');

/* function ignoreRules(rules, types) {
  const match = /\((.*?)\)/;

  return rules
    .filter((item) => Object.keys(item).length)
    .map((item) => {
      if (item.test && item.test.source) {
        const typesList = item.test.source.match(match);

        if (typesList) {
          const filteredTypes = typesList[1]
            .split('|')
            .filter((item) => !new RegExp(types.join('|')).test(item));

          item.test = new RegExp(
            item.test.source.replace(match, `(${filteredTypes.join('|')})`)
          );
        }
      }

      return item;
    });
} */

module.exports = async function webpackFinal(baseConfig, _options) {
  const { module = {} } = baseConfig;

  const config = {
    ...baseConfig,
    module: {
      ...module,
      rules: [...(module.rules || [])],
    },
  };

  /* const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));
  const assetLoader = {
    loader: assetRule.loader,
    options: assetRule.options || assetRule.query,
  };

  config.module.rules.unshift({
    test: /\.svg$/,
    use: ['@svgr/webpack', assetLoader],
  }); */

  const rules = config.module.rules.filter((rule) => Object.keys(rule).length);
  const svgLoaderRule = rules.find((rule) => rule.test.test('.svg'));
  svgLoaderRule.exclude = /\.svg$/;

  config.module.rules = [
    // ...ignoreRules(config.module.rules, ['svg' /* , 'pdf' */]),
    ...rules,
    {
      test: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { modules: true, sourceMap: true },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            // data: '@import "./global.scss";',
          },
        },
        {
          loader: path.resolve('./.storybook/loaders/loader.js'),
          options: {},
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            // data: '@import "./global.scss";',
          },
        },
      ],
    },
    // { test: /\.svg$/, use: ['@svgr/webpack', assetLoader] },
    { test: /[/\\]src[/\\].*\.svg$/, use: ['svg-react-loader'] },
  ];

  config.plugins = [...config.plugins];

  config.resolve = {
    ...config.resolve,
    /* fallback: {
      http: false,
    }, */
  };

  config.resolveLoader = {
    ...config.resolveLoader,
    /* modules: [path.resolve(__dirname, '.storybook/loaders')], */
  };

  // console.log(config.module.rules);

  return config;
};
