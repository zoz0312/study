const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // resolve: {
  //   extensions: ['.js', '.vue'],
  // },
  mode: 'development',
  entry: {
    'tk.index': './src/index.js',
  },
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
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
        ]
      },
      {
        test: /\.js$/,
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
  // resolve: {
  //   alias: {
  //     vue$: 'vue/dist/vue.esm.js'
  //   }
  // },
  plugins: [
    new webpack.ProvidePlugin({
      // Vue: ['vue/dist/vue.esm.js', 'default'],
      axios: ['axios', 'default'],
      moment: 'moment'
    }),
    new VueLoaderPlugin(),
  ]
};