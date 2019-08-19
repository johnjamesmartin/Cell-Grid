const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    rules: [{ test: /.ts$/, loader: 'ts-loader' }]
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
