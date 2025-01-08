const path = require('path')
const rspack = require('@rspack/core')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ReactRefreshPlugin = require('@rspack/plugin-react-refresh')
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')

const mode = process.env.NODE_ENV
const isDev = mode === 'development'
const plugins = [
  new ReactRefreshPlugin(),
  new rspack.HtmlRspackPlugin({ template: './src/template/index.html' }),
  new rspack.CssExtractRspackPlugin({ filename: '[name].[contenthash].css' }),
  new rspack.ProgressPlugin(),
  new rspack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(mode),
    'process.env.BASENAME': JSON.stringify(process.env.BASENAME),
  }),
  new FriendlyErrorsWebpackPlugin(),
]
if (!isDev) {
  plugins.push(new CssMinimizerPlugin())
}

/**
 * @type {import('@rspack/core').Configuration}
 */
module.exports = {
  mode,
  devtool: isDev ? 'source-map' : false,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
  },
  stats: 'summary',
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxAsyncRequests: 20,
      maxInitialRequests: 10,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          enforce: true,
          priority: 20,
        },
        rxjs: {
          test: /[\\/]node_modules[\\/](rxjs)[\\/]/,
          name: 'rxjs',
          chunks: 'all',
          enforce: true,
          priority: 10,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    tsConfig: path.resolve(__dirname, './tsconfig.json'),
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: [/[\\/]node_modules[\\/]/],
        loader: 'builtin:swc-loader',
        /** @type {import('@rspack/core').SwcLoaderOptions} */
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
              decorators: true,
            },
            externalHelpers: true,
            transform: {
              legacyDecorator: true,
              decoratorMetadata: true,
              decoratorVersion: '2021-12', // legacy
            },
          },
          env: {
            targets: 'Chrome >= 48',
          },
        },
      },
      {
        test: /\.(j|t)sx$/,
        loader: 'builtin:swc-loader',
        exclude: [/[\\/]node_modules[\\/]/],
        /** @type {import('@rspack/core').SwcLoaderOptions} */
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                runtime: 'classic',
                development: isDev,
                refresh: isDev,
              },
            },
            externalHelpers: true,
          },
        },
        type: 'javascript/auto',
      },
      {
        include: /node_modules\/redux-logger/,
        // redux-logger do not set sideEffects to false, manually set sideEffects to false
        sideEffects: false,
      },
      {
        test: /\.css$/i,
        use: [rspack.CssExtractRspackPlugin.loader, 'css-loader'],
        type: 'javascript/auto',
      },
    ],
  },
  plugins,
}
