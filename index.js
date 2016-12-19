'use strict';

let {
    mergeMap, reduce
} = require('bolzano');

let tuple = require('./src/tuple');
let list = require('./src/list');
let object = require('./src/object');
let logic = require('./src/logic');

module.exports = reduce([
    tuple,
    list,
    object,
    logic
], mergeMap, {});
