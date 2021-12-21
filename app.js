const crypto = require("crypto");
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.all('*', (req, res) => {
  const requestId = crypto.randomBytes(10).toString('hex');

  console.log(`Got a request with ID: ${requestId}`);
  console.log(`[requestId=${requestId}] Request path: ${req.method} ${req.path}`);
  console.log(`[requestId=${requestId}] Request headers: ${JSON.stringify(req.headers)}`);
  console.log(`[requestId=${requestId}] Request querystring: ${JSON.stringify(req.query)}`);
  console.log(`[requestId=${requestId}] Request body: ${JSON.stringify(req.body)}`);

  res.status(204).send('');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
