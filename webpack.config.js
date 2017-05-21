const path = require('path');
module.exports = {
  context: __dirname + '/app/assets/javascripts',
  entry: {
    login: './login.js',
    index: './index.js'
  },
  output: {
    path: path.join(__dirname, '/app/assets/javascripts/build'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
