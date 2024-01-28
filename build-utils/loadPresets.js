const { merge } = require('webpack-merge');

const applyPresets = (env = {presets: []}) => {
  const presets = env.presets || [];
  const flattenedPresets = [].concat(...[presets]);

  const mergedConfigs = flattenedPresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)(env)
  );

  return merge({}, ...mergedConfigs);
};

module.exports = applyPresets;