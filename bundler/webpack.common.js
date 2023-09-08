const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, '../src/script.js'),
    output:
    {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins:
    [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            minify: true,
            template: path.resolve(__dirname, '../src/pages/index.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            minify: true,
            template: path.resolve(__dirname, '../src/pages/news.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'portfolio.html',
            minify: true,
            template: path.resolve(__dirname, '../src/pages/portfolio.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'commission.html',
            minify: true,
            template: path.resolve(__dirname, '../src/pages/commission.html'),
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            minify: true,
            template: path.resolve(__dirname, '../src/pages/contact.html'),
        }),
        new MiniCSSExtractPlugin()
    ],
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: 
                [
                    'html-loader'
                ]
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            // CSS
            {
                test: /\.css$/,
                use:
                [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]-[hash][ext]'
                }
                // use:
                // [
                //     {
                //         loader: 'file-loader',
                //         options:
                //         {
                //             outputPath: 'assets/images/',
                //         }
                //     }
                // ]
            },

            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            }
        ]
    }
}
