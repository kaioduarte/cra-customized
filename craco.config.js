const { join } = require('path')
const { when } = require('@craco/craco')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const paths = {
  root: __dirname,
  src: join(__dirname, 'src')
}

const override = {
  development: {
    'react-dom': '@hot-loader/react-dom'
  },
  production: {
    react: 'preact/compat',
    'react-dom': 'preact/compat'
  }
}

const alias = {
  src: paths.src,
  components: join(paths.src, 'components'),
  config: join(paths.src, 'config'),
  pages: join(paths.src, 'pages'),
  reducers: join(paths.src, 'redux-flow', 'reducers'),
  utils: join(paths.src, 'utils'),
  ...override[process.env.NODE_ENV]
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
