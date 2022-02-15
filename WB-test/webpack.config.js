const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry:'./main.js',
    module: {
        rules: [
            { test: /\.svg$/, use:'svg-inline-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.js$/, use: 'babel-loader'}, 
        ]
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        static:{
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        part: 9000

    }
}