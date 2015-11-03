module.exports = {
  entry: {
    javascript: './app/index',
    html: './app/index.html',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
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
  }
};
