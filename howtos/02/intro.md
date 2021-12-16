# Bundling Your Renderer Script

We can use Webpack to package the renderer script (and its dependencies) into a bundle that
works in a browser and therefore don't need to turn on `nodeIntegration`
to enable Node.js `require`.

We don't have to disable context isolation either if we simply export a
function that we can invoke in the right execution context.
