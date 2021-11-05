const path = require('path');
const webpack = require('webpack');
const entry = require('./config/entry');
const alias = require('./config/alias');

module.exports = {
  entry,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias,
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   loader: 'ts-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /min\.js$/],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /min\.js$/],
        loader: 'eslint-loader',
        options: {
          parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module'
          },
          rules: {
            semi: 2
          }
        }
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      axios: ['axios', 'default'],
      moment: 'moment'
    }),
  ]
};