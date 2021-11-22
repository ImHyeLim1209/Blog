const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// publicPath : html-webpack-plugin이 HTML 생성 시 HTML 내부 리소스 파일의 경로를 만들 때 사용
//  - 브라우저에서 바로 실행하면 문제 없지만, SSR 시에는 필요
// 클라이언트 : 웹팩으로 번들링. babel-loader 사용
// Server : 기본적으로 서버는 번들링할 필요가 없다. babel/cli만 사용한다.


// 서버 파일 번들링 : 리소스를 file-loader로 번들링 하기 위해 필요할 수 있다.
//   - 클라이언트는 브라우저의 캐싱 때문에 chunkhash를 사용하나, 서버는 필요 없다.
//   - 웹팩의 target에 node가 입력되면 노드에 특화된 번들링 과정을 거친다.
//     - fs, path 모듈 등 내장 모듈을 번들 파일에 포함시키지 않는다.
//   - externals: []로 인해 node_modules 폴더는 번들링 하지 않음
//   - 서버에서는 __dirname: false를 해주지 않으면 절대경로인 /가 입력됨
//   - 서버 코드는 압축할 필요가 없으므로 optimization에서 설정을 false 해준다.
//   - file-loader 실행 시 한 쪽에서만 파일을 복사해오 충분하다.
const nodeExternals = require('webpack-node-externals');
function getConfig(isServer) {
  return {
    entry: isServer ? { server: './src/server.js' } : { main: './src/index.js' },
    output: {
    filename: isServer? '[name].bundle.js' : '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
    },
    target: isServer ? 'node' : 'web',
    externals: isServer ? [nodeExternals()] : [],
    node: {
      __dirname: false,
    },
    optimization: isServer ? { splitChunks: false, minimize: false } : undefined,
    module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader : 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, isServer ?'.babelrc.server.js' : '.babelrc.client.js'),
          }
        }
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              emitFile: isServer? false : true
            }
          }
      }
    ]
  },
    plugins: isServer ? [] : 
      [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template: './template/index.html'
      })
  ],
  mode: 'production'
  }
}

module.exports = [getConfig(false), getConfig(true)];