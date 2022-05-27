// A JavaScript function that returns an object.
// `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.
// `opts` is the user-defined options.
async function disableCachePlugin(context, opts) {
  return {
    name: "docusaurus-disable-cache-plugin",

    async postBuild(props) {
      setTimeout(() => {
        //kill the process once we're done to avoid swc getting stuck like an idiot
        process.exit(0);
      }, 1000);
    },

    configureWebpack(config, isServer, utils, content) {
      // Modify internal webpack config. If returned value is an Object, it
      // will be merged into the final config using webpack-merge;
      // If the returned value is a function, it will receive the config as the 1st argument and an isServer flag as the 2nd argument.

      if (config.mode === "development") {
        //don't disable cache in dev mode
        return {};
      }
      //just disable the webpack cache, as it takes more time than just re-building every time
      return { cache: false };
    },
  };
}

module.exports = disableCachePlugin;
