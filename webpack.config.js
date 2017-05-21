const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname + '/front/src',
  entry: {
    login: './login.jsx',
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
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: 'front/bundle',
    inline: true,
    hot: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
