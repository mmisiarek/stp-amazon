'use strict';

var heroin = require('heroin-js');

var configurator = heroin('7ba72776-600b-4bec-b0be-62a9576fefec', {debug: false});

configurator.export('stp-amazon').then(function(result) {
	console.log(result);
});

configurator({
  name: 'stp-amazon-stage',
  region: 'eu',
  stack: 'cedar-14',
  addons: { mongolab: { plan: 'mongolab:sandbox' } },
  collaborators:
   [ 'patryk.konior@schibsted.pl',
     'michal.misiarek@schibsted.pl',
     'pawel.gol@schibsted.pl' ]
});
