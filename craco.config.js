const { resolve } = require('path');

const CracoLessPlugin = require('craco-less');

const devServer = {
  port: 9900,
  proxy: {
    '/api': {
      target: 'http://localhost:10000',
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': '',
      // },
    },
  },
};

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: () => {
          return {
            test: /\.less$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: 'ns-[path][name]__[local]',
                  },
                },
              },
              'less-loader',
            ],
          };
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        crypto: false,
      };
      return webpackConfig;
    },
  },
  devServer,
};
