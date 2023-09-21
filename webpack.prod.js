module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devServer: {
        static: './src',
        hot: false
    },
};
