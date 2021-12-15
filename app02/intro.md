## Bundling your renderer script

We can use Webpack to package the renderer script (and its dependencies) into a bundle that works in a browser and therefore don't need to turn on `nodeIntegration` to enable Node.js `require`.

We _could_ have disabled `contextIsolation` so that the bundle could have access to the HTML document but instead we chose to expose a function which doesn't need to be context aware. The document that imports it will be its execution context and so we can see the result.
