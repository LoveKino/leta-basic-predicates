'use strict';

let {
    mergeMap, reduce
} = require('bolzano');

let tuple = require('./src/tuple');
let list = require('./src/list');
let object = require('./src/object');
let logic = require('./src/logic');
let math = require('./src/math');
let relation = require('./src/relation');
let control = require('./src/control');
let string = require('./src/string');

module.exports = reduce([
    tuple,
    list,
    object,
    logic,
    math,
    relation,
    control,
    string
], mergeMap, {});
