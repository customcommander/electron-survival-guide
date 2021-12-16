/**
The bundle exports a function at `window.app02` which can be invoked in the renderer page.
**/
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
