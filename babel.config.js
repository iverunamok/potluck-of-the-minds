const isProd = () => process.env.NODE_ENV === 'production';

module.exports = function (api) {
  const presets = ['@babel/env'];

  api.cache(isProd)
  
  return {
    presets
  };
}