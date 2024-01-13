const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = process.env.NODE_ENV
const isDev = mode === 'development'
const plugins = [
  new HtmlWebpackPlugin({ template: "./src/template/index.html" }),
  new webpack.ProgressPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(mode),
    'process.env.BASENAME': JSON.stringify(process.env.BASENAME),
  }),
]
if (isDev) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
  }))
}

/**
 * @type {import('webpack').Configuration}
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
  stats: 'normal',
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
      }
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      },
      {
        include: /node_modules\/redux-logger/,
        // redux-logger do not set sideEffects to false, manually set sideEffects to false
        sideEffects: false,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins,
};