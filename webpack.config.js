const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin').WebpackManifestPlugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')
const WebpackBarPlugin = require("webpackbar");

class DevManifestPlugin {
  /**
   * @param {import('webpack').Compiler} compiler 
   */
  apply(compiler) {
    const chunks = []
    compiler.hooks.emit.tapAsync('DevManifestPlugin', (compilation, callback) => {
      compilation.chunks.forEach((chunk) => {
        chunk.files.forEach(filename => {
          chunks.push(filename)
        })
      })
      console.log('\n')
      chunks.forEach(chunk => {
        console.log(`http://localhost:8080/${chunk}`)
      })
      callback()
    })
  };
}

const mode = process.env.NODE_ENV
const isDev = mode === 'development'
const plugins = [
  new WebpackBarPlugin(),
  new ManifestPlugin(),
  new FriendlyErrorsWebpackPlugin(),
  new HtmlWebpackPlugin({ template: "./src/template/index.html" }),
  new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  new webpack.ProgressPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(mode),
    'process.env.BASENAME': JSON.stringify(process.env.BASENAME),
  }),
]
if (isDev) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
  plugins.push(new DevManifestPlugin())
} else {
  plugins.push(new CssMinimizerPlugin())
  plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }))
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
      }
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@src/utils': path.resolve(__dirname, 'src/utils/'),
    }
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins,
}
