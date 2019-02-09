const { join } = require('path')

const paths = {
  root: __dirname,
  src: join(__dirname, 'src'),
}

const alias = {
  src: paths.src,
  components: join(paths.src, 'components'),
  config: join(paths.src, 'config'),
  reducers: join(paths.src, 'redux-flow', 'reducers'),
  utils: join(paths.src, 'utils')
}

module.exports = {
  presets: ['react-app'],
  plugins: [
    'react-require', [
      'module-resolver', {
        root: paths.root,
        alias,
      },
    ],
  ]
}
