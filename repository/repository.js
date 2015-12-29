'use strict';
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/stp-amazon';

const connection =  MongoClient.connect(url);
const books = connection.then(db => db.collection('books'));


module.exports = {
  findAllBooks:  () => {
    return books.then(collection => collection.find({}).toArray());
  },
  saveBook: (payload) => {
    return books.then( collection => {
      return collection.updateOne(
        { isbn: payload.isbn },
        {
          isbn: payload.isbn,
          count: payload.count
        },
        { upsert: true });
    });
  },
  getBookByIsbn: (isbn) => {
    return books.then(collection => collection.find({isbn: isbn}).limit(1).next());
  }
};

