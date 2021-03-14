module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
  },
};
