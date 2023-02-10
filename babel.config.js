module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            core: './src/core',
            ui: './src/ui',
            _di: './src/_di'
          }
        }
      ]
    ]
  }
}
