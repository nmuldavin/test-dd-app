const express = require('express');
const historyFallback = require('connect-history-api-fallback');

const api = require('./api');

const server = express().use('/api', api).use(historyFallback());

module.exports = server;
