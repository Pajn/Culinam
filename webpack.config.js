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
         'ts'
       ],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    // 'react': 'React',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
    root: __dirname,
  }
};
