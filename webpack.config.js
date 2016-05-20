var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    tsx: [
      'webpack-dev-server/client?http://0.0.0.0:3000/',
      'webpack/hot/only-dev-server',        
      './index.tsx'
      ],
    html: './index.html',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'immutable',
      'redux-thunk',
      'redux'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      { 
          test: /\.tsx?$/, 
          exclude: /node_modules/,          
          loaders: [
            'react-hot',
            'ts'
          ]             
      },      
      {
        test: /\.css$/,
        include: /client/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: /\.css$/,
        exclude: /client/,
        loader: 'style!css'
      },
    ],
    preLoaders: [
        { test: /\.js$/, loader: 'source-map-loader' }  
    ]    
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin()    
  ]
}
