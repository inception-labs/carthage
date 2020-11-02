const path = require('path')
var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  devtool: 'inline-source-map',
  externals: [nodeExternals()],
  module: {
    rules: [
      { 
        test: /\.(ts|js)x?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.graphql', '.gql']
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
}