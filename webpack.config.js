var path = require('path');

var webpack = require('webpack');

module.exports = {
    entry:[
      'webpack/hot/dev-server',
     path.resolve(__dirname, 'src/index.js')
   ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: "./build/"
    },

//-d的作用
devtool: 'cheap-module-source-map',
//在index.html 中加/static。这句话作用相当于加 --inline
devServer: {
  //  publicPath: "/static/",
   stats: { colors: true },
   port: 3000,
   inline: true,

   hot:true,
   historyApiFallback:true
 },
 plugins:[
   new webpack.HotModuleReplacementPlugin()
],
//文件后缀 一次查找 顺序文件夹，js文件，jsx文件。
resolve: {
  extensions: ["", ".js", ".jsx"],
},
//npm install --save-dev babel-loader babel-core包装载运用
module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.css/,
      loader: 'style!css!autoprefixer'
    },
    {
      test: /\.(jpe?g|png)$/,
      loader: 'file-loader'
    },
    {
      test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000"
    }
  ]
}
 };
