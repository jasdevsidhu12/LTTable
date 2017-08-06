const path = require('path');
const webpack = require('webpack');
module.exports = function(config) {
    const _config = {
        basePath: '',
        frameworks: ['jasmine'],
        files: ['node_modules/babel-polyfill/dist/polyfill.js', 'test/unit/**/*.js'],
        preprocessors: {
            'src/components/LeagueTableCanvas.jsx': ['webpack', 'sourcemap'],
            'test/unit/**/*.js': ['webpack', 'sourcemap']
        },
        webpack: {
            resolve: {
                extensions: ['.js','.jsx', '.scss'],
                alias: {
                    _components: path.resolve(__dirname, 'src/components')
                }
            },
            plugins: [
                    new webpack.ProvidePlugin({
                        "React": "react"
                    }),
            ],
            externals: {
                'jsdom': 'window',
                'cheerio': 'window',
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            },
            module: {
                rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        query: {
                            presets: ['airbnb']
                        }
                    }
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader',
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
        },
        browsers: ['Chrome'],
        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: true
    };
    config.set(_config);
}