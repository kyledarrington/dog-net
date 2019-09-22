module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
          {
              test: /\.(js)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          },
          {
              test: /\.(scss)$/,
              use: ['sass-loader']
          }
      ]
    },
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
}
