// implement your server here
// require your posts router and connect it here
const express = require('express');

const server = express();

server.use(express.json());

server.use('/', (req, res) => res.send('API running'));

module.exports = server;