var util = require('util');
var isomorph = require('littlest-isomorph');
var dispatcher = require('littlest-dispatcher');
var littlest = {};

util._extend(littlest, isomorph);
util._extend(littlest, dispatcher);

module.exports = littlest;
