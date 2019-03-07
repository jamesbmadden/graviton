const path = require('path');

module.exports = {
  entry: {
    button: './src/gvt-button.js',
    input: './src/gvt-input.js',
    dropdown: './src/gvt-dropdown.js',
    panel: './src/gvt-panel.js',
    shape: './src/gvt-shape.js'
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'components')
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