'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');




module.exports = function(repo){

  let api = require('./api')(repo);

  /* *********************************
   * MIDDLEWARES
   * *********************************/
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    console.log(Date(), ' New request');
    next();
  });

  /* *********************************
   * API
   * *********************************/
  app.get('/', (req, res) => res.status(500).send('Hello World'));
  app.use('/book', api);


  /* *********************************
   * ERROR HANDLING
   * *********************************/
  app.use((req, res, next) => {
    let err = new Error('Not found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res, next) => { // jshint ignore:line
    console.log('Error: ', err);
    res.status(err.status || 500).json({err: err.message});
  });

  return app;
};
