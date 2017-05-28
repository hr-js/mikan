const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname + '/front/src',
  entry: {
    index: './index.jsx'
  },
  output: {
    path: path.join(__dirname, '/front/bundle'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader'
    }]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('./front/src/presentations'),
      path.resolve('./front/src/containers')
    ],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: 'front/bundle',
    inline: true,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
