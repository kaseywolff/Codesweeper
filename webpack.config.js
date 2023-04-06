const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // added mode to check front and back ends
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
            [`@babel/preset-env`, { targets: 'defaults' }],
            [`@babel/preset-react`, { targets: 'defaults' }]
            ]
          }
        }
      }, 
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/html/index.html'
    })
  ],

  devServer: {
    static: {
      publicPath: '/',
      directory: path.join(__dirname, 'build')
    },
    port: 3000,
  }
}