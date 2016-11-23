var webpack = require('webpack')

module.exports =  {
  entry: [
    './src/js/main.js'
  ],
  output: {
    path: "/public/assets/js",
    publicPath: "/public/",
    filename: "index.js"
  },
  watch: false,
  module: {
    loaders: [
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /bower_components|node_modules|vue\/src|vue-router\//,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    modulesDirectories: ['bower_components'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  }
}
