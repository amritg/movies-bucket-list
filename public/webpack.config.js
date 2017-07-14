module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: '/node_modules', loader:'babel-loader'},
      {test: /\.js$/, exclude: '/node_modules', loader:'eslint-loader'}
    ]
  },
  devServer: {
    proxy: {
      '/apitmdb': {
        target: 'https://api.themoviedb.org',
        pathRewrite: {'^/apitmdb/' : ''},
        secure: false
      }
    }
  }
}