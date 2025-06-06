module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import'
  ]
} 