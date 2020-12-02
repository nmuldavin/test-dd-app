const express = require('express');
const app = require('.');
const paths = require('../../config/paths.js');

const port = process.env.PORT || 3000;

app
  .use(express.static(paths.dist()))
  .listen(port, () => console.log(`Server listening at port ${port}`));
