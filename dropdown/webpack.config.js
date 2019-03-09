const path = require('path');

module.exports = {
  entry: './src/gvt-dropdown.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-decorators'
            ]
          }
        },
        include: [
          path.join(__dirname, '../src'),
          /\/node_modules\/lit-element/
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader'
        },
        {
          loader: 'less-loader'
        }]
      }
    ]
  }
}