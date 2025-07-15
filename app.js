const express = require('express');
require('dotenv').config();
const app = express();
const routes = require('./routes/eventRoutes');

app.use(express.json());
app.use('/api', routes);

app.get('/', (_, res) => res.send('Event API'));

module.exports = app;
