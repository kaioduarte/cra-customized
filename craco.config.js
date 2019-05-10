const { join } = require('path')
const { when } = require('@craco/craco')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const paths = {
  root: __dirname,
  src: join(__dirname, 'src')
}

const alias = {
  src: paths.src,
  components: join(paths.src, 'components'),
  config: join(paths.src, 'config'),
  pages: join(paths.src, 'pages'),
  reducers: join(paths.src, 'redux-flow', 'reducers'),
  utils: join(paths.src, 'utils'),
  'react-dom': process.env.NODE_ENV === 'development'
    ? '@hot-loader/react-dom'
    : 'react-dom'
}

module.exports = {
  babel: {
    presets: ['react-app'],
    plugins: ['react-hot-loader/babel']
  },
  eslint: {
    configure: {
      extends: [
        'react-app',
        'standard',
        'standard-react'
      ]
    }
  },
  webpack: {
    alias,
    plugins: [
      ...when(
        Boolean(process.env.ANALYZE),
        () => [new BundleAnalyzerPlugin()], []
      )
    ]
  }
}
