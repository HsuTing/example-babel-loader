const path = require('path');

module.exports = {
  name: 'example',
  cache: true,
  target: 'web',
  entry: {
    example: path.resolve(__dirname, './src/example'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    chunkFilename: '[name].js',
    strictModuleExceptionHandling: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: '../../babel.config.js',
          },
        },
      },
    ],
  },
};
