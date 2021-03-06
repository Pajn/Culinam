var OfflinePlugin = require('offline-plugin');

var babelPlugins = [];

const production = process.env.NODE_ENV === 'production';

var config = {
  debug: !production,
  devtool: production ? '' : 'source-map',
  entry: {
    js: './app/index',
    html: './app/index.html',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel?' + JSON.stringify({
            presets: ["react", "es2015", "stage-1"],
            plugins: production
              ? ['transform-react-constant-elements', 'transform-react-inline-elements']
              : [],
          }),
         'ts',
       ],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
    root: __dirname,
  },
  plugins: [
    new OfflinePlugin({
      caches: 'all',
      scope: '/Culinam/',
      updateStrategy: 'hash',

      ServiceWorker: {
        output: 'sw.js',
      },

      AppCache: {
        directory: 'appcache/',
      }
    }),
  ],
};

if (production) {
  var webpack = require('webpack');

  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      test: /\.js$/,
    }),
  ]);
}

module.exports = config;
