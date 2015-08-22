var srcFiles = [
  /src/,
]

module.exports = {
  entry: {
    './build/js/bundle.js': './src/js/index.js'
  },
  output: { filename: '[name]' },
  module: {
    loaders: [
      { test: /\.js(x)?$/, include: srcFiles, loaders: ['babel'] }
    ]
  }

}
