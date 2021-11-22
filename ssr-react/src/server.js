import express from 'express';
import fs from 'fs';
import path from 'path';
import {renderToString} from 'react-dom/server';
import React from 'react';
import App from './App';
import { ServerStyleSheet } from 'styled-components';

const app = express();
const html = fs.readFileSync(
  path.resolve(__dirname, '../dist/index.html'),
  'utf8'
);

app.use('/dist', express.static('dist'));

// favicon.ico : 브라우저가 자동으로 요청하는 파일
// favicon.ico는 미리 처리한다.
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

// renderToString로 React의 App 컴포넌트를 렌더링한다.
app.get('*', (req, res) => {
  const parseUrl = url.parse(req.url, true);
  const page = parseUrl.pathname ? parseUrl.pathname.substr(1) : 'home';

  const sheet = new ServerStyleSheet();
  const renderString = renderToString(sheet.collectStyles(<App page="home" />)); // React 요소에 스타일 정보 수집을 위한 코드 삽입됨
  const styles = sheet.getStyleTags(); // 스타일 정보 추출
  const initialData = { page };

  const result = html
    .replace('<div id="root"></div>', `<div id="root">${renderString}</div>`)
    .replace('__DATA_FROM_SERVER__', JSON.stringify(initialData))
    .replace('__STYLE_FROM_SERVER', styles);
    res.send(result);
});
app.listen(3000);

