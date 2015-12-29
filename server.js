'use strict';

const port = 3000;
const repository = require('./repository/repository');


const app = require('./app')(repository);

const server = app.listen(port, ()=> {
  console.log('Server listening on: ', server.address().port);
});

