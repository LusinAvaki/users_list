const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const models = require('./models/index');
const { usersRoutes, publicRoutes } = require('./routes/index.js');

const app = express();

app.use(morgan('dev'));

/**
 * @description Middleware - body parser:
 * 1. Parses the text as URL encoded data (limit 5 mb).
 * 2. Parses the text as JSON & exposes the resulting object on req.body (limit 5 mb).
 */
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(bodyParser.json({ limit: '5mb' }));

app.use('/', publicRoutes);
app.use('/users', usersRoutes);

app.use((req, res, next) => next(new Error('The specified resource path does not exist.')));

app.use((err, req, res, next) => {
    res.status(500).json(err.message)
});


module.exports = app;