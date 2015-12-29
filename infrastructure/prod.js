var _ = require('lodash');
var heroin = require('heroin-js');

var test = {
   name: 'stp-amazon',
   config_vars: {
     NODE_ENV: 'production'
   }
};

var config = _.merge({}, require('./base'), test);

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
configurator(config);

