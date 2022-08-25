const path = require('path')
module.exports = {
  style: {
    modules: {
      localIdentName: '[path][name]__REJAJAMIL__[hash:base64:5]',
    },
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/_components'),
      '@layouts': path.resolve(__dirname, 'src/_layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@helpers': path.resolve(__dirname, 'src/_helpers'),
      '@api': path.resolve(__dirname, 'src/_api'),
      '@redux': path.resolve(__dirname, 'src/_redux'),
      '@images': path.resolve(__dirname, 'src/_assets/images'),
      '@font-icon': path.resolve(__dirname, 'src/_assets/font-icon'),
      crypto: path.resolve(__dirname, 'node_modules/crypto-browserify'),
      stream: path.resolve(__dirname, 'node_modules/stream-browserify'),
    },
    fallback: {
      crypto: false,
    },
  },
}
