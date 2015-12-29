var _ = require('lodash');
var heroin = require('heroin-js');

var test = {
   name: 'stp-amazon-stage',
   config_vars: {
     NODE_ENV: 'test'
   }
};

var config = _.merge({}, require('./base'), test);

console.log(config);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);
