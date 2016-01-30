var webpack = require('webpack')

module.exports = {
  entry : {
    "app":  "./src/app.js"
  },
  output : {
    path: __dirname + '/dist',
    filename: './[name].js'
  },
  devtool : 'source-map',
  module : {
    loaders : [
      { test: /\.js?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: ['es2015'] } },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.html$/, loader: 'raw', exclude : /node_modules/ },
      { test: /\.(png)$/, loader: 'url-loader?limit=100000' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.json$/, loaders: ["json-loader"] }
    ]
  }
};
