const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Clock App',
      template: './src/index.ejs',
    }),
    {
      apply: (compiler) => {
        compiler.hooks.done.tap('DonePlugin', (stats) => {
          console.log(__dirname);
          fs.symlink(
            `${__dirname}/screenly.yml`,
            `${__dirname}/dist/screenly.yml`,
            (err) => {
              if (err) {
                console.error(err);
              }

              console.log('Symlink created!');
            },
          );
        });
      },
    },
  ],
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve('dist'),
    clean: true,
  },
};
