module.exports = {
  mode: 'production',
  context: __dirname,
  entry: {
    renderer: './renderer.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
    library: {
      type: 'window',
      name: 'app02'
    }
  }
};
