
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    mode: 'production',
    entry: './src/index.js',

    output: {
        path: __dirname + '/dist',
        filename: 'webpack-lazy-load.js',
        chunkFilename: 'webpack-lazy-load.bundle.js'
    },

    bail: true,

    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                test:          /\.js$/,
                uglifyOptions: {
                    compress: {
                        sequences: true,
                        passes:    3
                    },
                    output: {
                        beautify: true
                    },
                    mangle: true
                }
            })
        ]
    }
};
