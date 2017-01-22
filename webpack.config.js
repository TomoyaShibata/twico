module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules|vue\/src/,
      loader: 'ts-loader'
    }]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    },
    extensions: [
      '.ts', '.js'
    ]
  }
}