'use strict';

let express = require('express');
let router  = express.Router();


module.exports = function(repo){

  router.post('/', (req, res, next) => {
      repo.saveBook({
        isbn: req.body.isbn,
        count: req.body.count
      })
      .then(res.send.bind(res))
      .catch(next);
  });

  router.get('/' , (req, res) => {
    repo.findAllBooks()
    .then(res.json.bind(res));
  });

  router.get('/:id', (req, res) => {
    let isbn = req.params.id;
    repo.getBookByIsbn(isbn)
      .then(res.send.bind(res));
  });

  return router;
};
