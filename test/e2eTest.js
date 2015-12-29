'use strict';

const repository = require('../repository/inMemory')();
const app = require('../app')(repository);
const request = require('supertest');
const assert = require('assert');

describe('Book resource', function(){
  let mock = {'isbn': '123', 'count': '5'};
  let mock2 = {'isbn': '321', 'count': '10'};
  it('has working POST endpoint', function(done){
    request(app)
      .post('/book')
      .set('Content-Type', 'application/json')
      .send(mock)
      .expect(200)
      .end(function(err, res){
        if (err) { throw err };
        done();
      });
  });

  it('should get all books', function(done){
    request(app)
      .get('/book')
      .set('Content-Type', 'application/json')
      .send(mock)
      .expect(200)
      .end(function(err, res){
        assert.equal(res.body.length, 1);
        if (err) { throw err };
        done();
      });
  });

  it('should get one book', function(done){
    request(app)
      .get(`/book/${mock.isbn}`)
      .expect(200)
      .end(function(err, res){
        assert.equal(res.body.count, mock.count);
        if (err) { throw err };
        done();
      });
  });
});

