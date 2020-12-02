const express = require('express');

const api = express.Router().get('/ping', (req, res) => res.send('pong'));

module.exports = api;
