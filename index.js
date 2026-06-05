const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.type('text').send('Hello S Thiru Malai 004 - i am node app\n');
});

app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});
