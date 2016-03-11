var webpack = require('webpack');

var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {warnings: false}
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [UglifyJsPlugin]
}
