const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// publicPath : html-webpack-plugin이 HTML 생성 시 HTML 내부 리소스 파일의 경로를 만들 때 사용
//  - 브라우저에서 바로 실행하면 문제 없지만, SSR 시에는 필요
// 클라이언트 : 웹팩으로 번들링. babel-loader 사용
// Server : 서버는 번들링할 필요가 없다. babel/cli만 사용한다.
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader : 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, '.babelrc.client.js'),
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html'
    })
  ],
  mode: 'production'
}