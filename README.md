This is example code for the article series

# Publish a modern JavaScript (or TypeScript) library

[Read it here.](http://tobias-barth.net/blog/2019/07/Publish-a-modern-JavaScript-or-TypeScript-library/)

The code itself does not much: It exports a React component (`ExampleComponent`) that uses a custom hook which returns the props that have changed before the last re-render. The hook is also exported separately (`usePropsThatChanged`). It returns a `Set`. An array would work the same way but we use a Set for illustrating transpiling/polyfilling of ES2015+ features.

## Variants

Throughout the article series I present common alternatives to solve the same task. For instance, transpiling modern code to incapable targets with Babel or with the TypeScript compiler. I decided to show all of these variants here in this repository by utilizing branches. The `master` branch will reflect my personal choices while other, aptly named branches will show configurations for other combinations of tools.

The following table will list them.

tool / feature         | `master` | `typescript-babel` |
-----------------------|----------|--------------------|
Transpiling with Babel |   x      |  x                 |
TypeScript             |          |  x                 |

