var _ = require('lodash');

module.exports = function () {

    var books = [];

    return {
        findAllBooks: function () {
            return Promise.resolve(books);
        },
        saveBook: function (payload) {
            var item = this._findItem(payload.isbn);
            if (item) {
                item.count = payload.count;
            } else {
                books.push({isbn: payload.isbn, count: payload.count});
            }
            return Promise.resolve();
        },
        getBookByIsbn: function(isbn){
          return Promise.resolve(this._findItem(isbn));
        },
        _findItem: function (isbn) {
            return _.find(books, function (book) {
                return book.isbn === isbn;
            });
        }
    };
};
