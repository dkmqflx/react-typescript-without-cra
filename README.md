### Folder Structure

```bash
├── dist
├── src
├────── App.tsx
├────── index.tsx
├── babel.config.js
├── package.json
├── tsconfig.json
├── webpack.config.js

```

### npm install

```bash
# webpack
npm install webpack webpack-cli html-webpack-plugin -D

# webpack dev server
npm i react-refresh @pmmmwh/react-refresh-webpack-plugin webpack-dev-server  -D

# babel
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript -D

# react
npm install react react-dom

# typescript
npm install @types/react @types/react-dom typescript

npm install ts-loader -D

# styled-component
npm install styled-components @types/styled-components babel-plugin-styled-components -D

# recoil
npm install recoil

# react-query
npm install react-query

# antd
npm install antd @ant-design/icons

```

### tsconfig.json

```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "ES6",
    "module": "commonjs",
    "lib": ["ES5", "DOM", "ES2016", "ES2017"],
    "allowJs": true,
    "checkJs": true,
    "jsx": "react-jsx",
    "declaration": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "removeComments": true,
    "noEmitOnError": true,
    "strict": true,

    /* Additional Checks */
    "noUnusedLocals": true /* Report errors on unused locals. */,
    "noUnusedParameters": true /* Report errors on unused parameters. */,
    "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
    "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */,
    "noUncheckedIndexedAccess": true /* Include 'undefined' in index signature results */,

    /* Module Resolution Options */
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,

    /* Experimental Options */
    "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,

    /* Advanced Options */
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### babel.config.js

```js
module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
  plugins: ['babel-plugin-styled-components'],
};
```

### webpack.config.js

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    port: 3200,
    open: true,
    hot: true,
    devMiddleware: {
      publicPath: '/', // 웹팩이 파일을 빌드해서 생성을 해주는 경로 , 가상의 경로 , dev server의 경우에는 메모리에 생성을 해준다
    },
  },

  entry: {
    app: path.join(__dirname, 'src/index.tsx'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new RefreshWebpackPlugin(),
  ],
};
```

### package.json

```json
	"scripts": {
		"dev": "webpack serve --mode development --open",
    "build": "webpack --mode production",
    "prestart": "NODE_ENV=production npm run build",
    "start": "webpack serve",
  },
```

---

## Reference

- [React 세팅하기 (without create-react-app) - 차근차근](https://enai.tistory.com/51)
- [리액트 웹팩으로 개발 환경 구축하기(without CRA)](https://velog.io/@_uchanlee/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9B%B9%ED%8C%A9%EC%9C%BC%EB%A1%9C-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0without-CRA)
- [[React] 환경설정 제대로 알고 하기 (without CRA) ①](https://egg-programmer.tistory.com/259)
- [React + TypeScript + Webpack Without CRA](https://velog.io/@eamon3481/React-TypeScript-Webpack-Without-CRA)
- [CRA 없이 React + TypeScript + Webpack 프로젝트 만들기 #1](https://blog.doitreviews.com/development/2020-05-07-react-typescript-webpack/)

- webpack dev server

  - [webpack webpack-dev-server v4.0.0](https://jjnooys.medium.com/webpack-webpack-dev-server-v4-0-0-de24d4e8ee9d)

- babel

  - [babel.config.js 파일과 .babelrc 차이점](https://kschoi.github.io/cs/babel-config-js-vs-babelrc/)
  - [ReactJS styled-components - 히히히](https://hyunalee.tistory.com/91)
  - [babel-plugin-styled-components 을 사용해 styled-components 의 디버그를 편하게 하기](https://blog.woolta.com/categories/1/posts/198)

- tsconfig.json

  - [Typescript 컴파일시 세부설정 (tsconfig.json)](https://codingapple.com/unit/typescript-tsconfig-json/)
  - [CRA TypeScript로 생기는 tsconfig.json 뜯어보기](https://jsbeginner.tistory.com/entry/CRA-TypeScript%EB%A1%9C-%EC%83%9D%EA%B8%B0%EB%8A%94-tsconfigjson-%EB%9C%AF%EC%96%B4%EB%B3%B4%EA%B8%B0)
  - [Typescript 기초 학습 2.tsconfig.json(인프런\_Zerocho님 강의 학습 의식의 흐름대로 노트 정리)](https://okayoon.tistory.com/entry/Typescript-%EA%B8%B0%EC%B4%88-%ED%95%99%EC%8A%B5-2tsconfigjson%EC%9D%B8%ED%94%84%EB%9F%B0Zerocho%EB%8B%98-%EA%B0%95%EC%9D%98-%ED%95%99%EC%8A%B5-%EC%9D%98%EC%8B%9D%EC%9D%98-%ED%9D%90%EB%A6%84%EB%8C%80%EB%A1%9C-%EB%85%B8%ED%8A%B8-%EC%A0%95%EB%A6%AC)
  - [{ tsconfig.json } 제대로 알고 사용하기](https://velog.io/@sooran/tsconfig.json-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%95%8C%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
  - [[ NPM ] TypeScript + React로 제작한 Component Library 배포하기](https://velog.io/@jjunyjjuny/NPM-TypeScript-React%EB%A1%9C-%EC%A0%9C%EC%9E%91%ED%95%9C-Component-Library-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0)
  - [https://github.com/dkmqflx/typescript-dreamcoding/blob/master/11-config/tsconfig.json](https://github.com/dkmqflx/typescript-dreamcoding/blob/master/11-config/tsconfig.json)

- styled-components

  - [babel-plugin-styled-components 을 사용해 styled-components 의 디버그를 편하게 하기](https://blog.woolta.com/categories/1/posts/198)
  - [React에서 styled-components 사용하기](https://dev-yakuza.posstree.com/ko/react/styled-components/)
