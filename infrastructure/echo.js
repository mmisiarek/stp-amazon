'use strict';

var heroin = require('heroin-js');

var configurator = heroin('7ba72776-600b-4bec-b0be-62a9576fefec', {debug: false});

configurator.export('stp-amazon').then(function(result) {
  console.log(result);
});
