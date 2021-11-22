const config = require('./.babelrc.common.js');
config.presets.push('@babel/plugin-transform-modules-commonjs');
module.exports = config;