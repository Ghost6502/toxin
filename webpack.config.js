const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: '[name].js',
        assetModuleFilename: 'assets/[name][ext]',
        clean: true
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    devServer: {
        watchFiles: './src',
        port: 3000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'app')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader, 'css-loader', 
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers: 'last 8 versions'
                                    },
                                ],
                            ],
                        },
                    },
                }, 'sass-loader']
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src', 'index.pug')
        }),
        new miniCssExtractPlugin({
            filename: '[name].css',
        }),
    ]
}