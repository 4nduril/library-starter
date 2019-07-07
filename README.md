This is example code for the article series

# Publish a modern JavaScript (or TypeScript) library

[Read it here.](http://tobias-barth.net/blog/2019/07/Publish-a-modern-JavaScript-or-TypeScript-library/)

The code itself does not much: It exports a React component (`ExampleComponent`) that uses a custom hook which returns the props that have changed before the last re-render. The hook is also exported separately (`usePropsThatChanged`). It returns a `Set`. An array would work the same way but we use a Set for illustrating transpiling/polyfilling of ES2015+ features.
