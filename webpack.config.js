const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
});

module.exports = {
    entry: [__dirname + '/src/main.js'],
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            include: [
              path.resolve(__dirname, "src")
            ],
            exclude: [
              path.resolve(__dirname, "node_modules")
            ],
            loader: 'babel-loader'
          },
          {
            test: /\.css$/,
            loader: ['style-loader','css-loader']
          },
          {
            test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000'
          }
        ]
    },
    devtool: 'cheap-module-source-map',
    context: __dirname,
    plugins: [
      HTMLWebpackPluginConfig
    ],
};
