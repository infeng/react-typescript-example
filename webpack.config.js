var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: {
    tsx: './index.tsx',
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
    path: path.join(__dirname, './build'),
    filename: 'js/bundle.js',
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
            'ts-loader'
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
  ],
  devServer: {
    contentBase: './src',
    hot: true
  }
}
