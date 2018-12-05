const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProd = () => process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  stats: { children: false },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [ path.resolve(__dirname, 'src') ],
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        include: [ path.resolve(__dirname, 'src/style') ],
        use:  [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { 
              minimize: true,
              interpolate: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico)$/,
        loader:'file-loader'
      },
    ]
  },
  plugins: [ 
    new CleanWebpackPlugin('public', {} ),
    new WebpackMd5Hash(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.resolve(__dirname, 'src/templates/contact.html'),
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.resolve(__dirname, 'src/templates/about.html'),
      filename: 'about.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    compress: true,
    port: 8080,
    stats: { children: false }
  }
}
