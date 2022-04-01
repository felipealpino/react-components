const path = require('path');

module.exports = {
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',

  stories: ['../src/components/**/*.stories.(ts|js)x'],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, '..'),
      use: [
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, '..', 'tsconfig.json')
          }
        }
      ]
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['@shared'] = path.resolve(__dirname, '../src/shared');
    config.resolve.alias['@root'] = path.resolve(__dirname, '../src');
    return config;
  }
};
