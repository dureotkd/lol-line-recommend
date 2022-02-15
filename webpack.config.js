const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /**
   * 엔트리
   * 웹팩으로 여러코드들을 번들링 하려면 복잡하게 얽힌 코드들의 맨 처음 시작점이 되는 파일이 필요한데
   * 이를 엔트리 파일 이라고 부릅니다
   */
  entry: {
    app: '/client/src/index.ts',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  /**
   * 아웃풋
   * 엔트리 파일로부터 복잡하게 얽혀있던 코드들을 하나의 파일로 번들링한 결과물을
   * 설정하는 단계입니다
   */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  /**
   * 웹팩은 자바스크립트만을 모듈화 대상으로 인식하기 때문에
   * 타입스크립트나 바벨도 웹팩이 인식하게끔 설정해줘야합니다
   */
  module: {
    rules: [
      {
        test: /\.ts$/, // tsx나 ts파일을 발견하면
        use: 'ts-loader', // 해당 loader를 통해서 ts를 js로 변환합니다.
        exclude: /node_modules/, // 패키지 폴더는 제외합니다.
      },
    ],
  },
  devServer: {
    host: '127.0.0.1',
    compress: true,
    hot: true,
    port: 5000,
    open: true,
  },
  plugins: [
    new RefreshWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  // 번들링 모드 development / production
  mode: 'development',
};
