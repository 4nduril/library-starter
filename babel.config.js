module.exports = {
  presets: [
    [
      "@babel/env", // transpile for targets
      {
        modules: false // don't transpile module syntax
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime", // replace helper code with runtime imports (deduplication)
      { corejs: 3 } // import corejs polyfills exactly where they are needed
    ]
  ],
  env: {
    test: {
      // extra configuration for process.env.NODE_ENV === 'test'
      presets: ["@babel/env"] // overwrite env-config from above with transpiled module syntax
    }
  }
};
