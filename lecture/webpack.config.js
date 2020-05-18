const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.jsx','.js','.tsx','.ts'], //webpack 에서 처리해주는 확장자들
  },

  entry: {
    app: './client' //client.tsx 가 main file 이 될 것임.
  },

  module: { //module 랑 plugins 에 적힌 과정을 client.tsx 에 적용해서 최종적으로 app.js 로 뽑아낸다.
    rules: [{
      test: /\.tsx?$/, //tsx 나 ts 파일을 발견하면
      loader: 'awesome-typescript-loader', //awesome typescript 는  babel 과 함께 사용 할 수 있다.
    }]
  },

  plugins: [
    // new webpack.LoaderOptionsPlugin({ debug: true }), //Loader 들에 debug 옵션을 추가해주는 플러그인
  ],

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  }

}