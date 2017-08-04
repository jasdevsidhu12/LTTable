var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    'app': './src/app.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'src',
    filename: '[name].min.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname,
    port: 8080,
    hot: true,
    inline: true,
    stats: 'minimal'
  },
  resolve: {
    extensions: ['.js','.jsx', '.scss'],
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }
      }
    ]
  }
}