// implement your server here
// require your posts router and connect it here
const express = require('express');

const postRoutes = require('./posts/posts-router');

const server = express();

server.use(express.json());

server.use('/api/posts', postRoutes);

server.use('/api', (req, res) => res.send('API running'));

module.exports = server;