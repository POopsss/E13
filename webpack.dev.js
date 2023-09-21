module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: '.',
        hot: true
    },
};