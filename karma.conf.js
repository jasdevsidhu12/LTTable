const path = require('path');
const webpack = require('webpack');
module.exports = function(config) {
    const _config = {
        basePath: '',
        frameworks: ['jasmine'],
        files: ['node_modules/babel-polyfill/dist/polyfill.js',
        { pattern: 'test/unit/**/*.js', watched: true }],
        preprocessors: {
            'test/unit/**/*.js': ['webpack', 'sourcemap']
        },
        webpack: {
            resolve: {
                extensions: ['.js','.jsx', '.scss'],
                alias: {
                    _components: path.resolve(__dirname, 'src/components'),
                    _action: path.resolve(__dirname, 'src/action'),
                    _api: path.resolve(__dirname, 'src/api'),
                    _reducers: path.resolve(__dirname, 'src/reducers')
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
        webpackMiddleware: {
            stats: 'error-only'
        },
        webpackServer: {
            noInfo: true
        },
        browsers: ['Chrome'],
        port: 9876,
        colors: true,
        autoWatch: true,
        singleRun: true
    };
    config.set(_config);
}