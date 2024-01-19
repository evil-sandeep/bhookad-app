// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/app.js', // Specify your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto',
      },
      // Add other loaders and rules as needed
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  // Add other configuration options as needed
};
