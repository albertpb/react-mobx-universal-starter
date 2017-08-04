'use strict';

import Dir from '../src/config/dir';
import merge from 'webpack-merge';
import isDev from 'isdev';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

let WebpackConfig = {
  context: Dir.root,
  entry: ['babel-polyfill', Dir.client + '/client.js'],
  output: {
    path: Dir.build,
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)(\?.*$|$)/,
        use: 'eslint-loader',
        exclude: /node_modules/,
        include: Dir.src,
      },
      {
        test: /\.(js|jsx)(\?.*$|$)/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(png|jpg|gif)(\?.*$|$)/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: isDev ? true : false,
              },
            },
            {
              loader: 'resolve-url-loader',
            },
          ],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: isDev ? true : false,
              },
            },
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: isDev ? true : false,
              },
            },
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'less-loader',
            },
          ],
        }),
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
    }),
  ],
  node: {
    fs: 'empty',
  },
};

if (!isDev) {
  WebpackConfig = merge(WebpackConfig, {
    bail: true,
    devtool: 'source-map',
    plugins: [
      new UglifyJSPlugin({
        compress: {
          drop_console: true,
          drop_debugger: true,
          dead_code: true,
        },
        sourceMap: false,
        mangle: {
          // Skip mangling these
          except: ['$super', '$', 'exports', 'require'],
        },
        comments: false,
        drop_console: true,
      }),
    ],
  });
}

if (isDev) {
  WebpackConfig = merge(WebpackConfig, {
    devtool: 'source-map',
    plugins: [],
  });
}

export default WebpackConfig;
