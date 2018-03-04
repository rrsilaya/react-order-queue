const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

const theme = require('./src/app/theme');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: true }
    ]
  , config);
  config = rewireLess.withLoaderOptions({
    modifyVars: theme
  })(config, env);

  return config;
}