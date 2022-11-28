const http = require('http');
const fs = require('fs');
const express = require('express');

const dummyServer = (
  ip,
  port,
) => {
  const app = express()
  app.use('/', express.static('dist'))
  app.listen(port, () => {
    console.log(`Dev server is running on http://${ip}:${port}`);
    console.log('Serving dist/');
  });
};

dummyServer('localhost', '3003')