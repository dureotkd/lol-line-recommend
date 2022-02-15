const express = require('express');
const path = require('path');

const app = express();
const dirName = __dirname.slice(0, -7);

app.use('/static', express.static(path.resolve(dirName, 'client', 'static')));

app.get('/*', (req, res) => {
  // __dirname : 내 디렉토리 경로 (C:/reactProject/lol-line-recommend)

  // path.resolve(경로, .. .) : 여러 인자를 넣으면 하나의 경로로 합쳐준다. (절대경로)
  // path.join 은 위와 같지만 상대경로이다~

  res.sendFile(path.resolve(dirName, 'client', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => console.log('Server running...'));

// run server by node server.js

/**
 * 참고 블로그 : https://emewjin.github.io/211215/
 * 참고 깃허브 : https://github.com/emewjin/vanilla-js-spa
 */
