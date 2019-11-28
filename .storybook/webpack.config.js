module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              // localIdentName: '[path][name]__[local]--[hash:base64:5]'
            },
          },
          require.resolve('sass-loader')
        ],
      },
    ],
  },
}