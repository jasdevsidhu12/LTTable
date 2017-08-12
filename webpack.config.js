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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
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
    extensions: ['.js','.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react', 'stage-1']
            }
        }
      }, 
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  }
}