const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const createBaseWebpackConfig = () => {
  return {
    entry: './src/bootstrap.js',
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    output: {
      path: path.resolve(__dirname, 'dist/'),
      publicPath: '/dist/',
      filename: 'bundle.js',
    },
    devServer: {
      static: [
        {
          directory: path.join(__dirname, 'public/'),
          publicPath: '/',
        },
        {
          directory: path.join(__dirname, 'dist/'),
          publicPath: '/dist/',
        },
      ],
      port: 3000,
      liveReload: true,
      open: true,
      compress: true,
      disableHostCheck: true,
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
        typescript: {
          eslint: {
            files: './src/**/*',
          },
        },
      }),
    ],
  }
}

module.exports = () => {
  const config = createBaseWebpackConfig()

  return config
}
