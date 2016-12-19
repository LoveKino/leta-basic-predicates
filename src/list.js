'use strict';

let {
    map, reduce, reverse, find, filter, findIndex
} = require('bolzano');

let concat = (list1, list2) => list1.concat(list2);

module.exports = {
    map,
    reduce,
    reverse,
    '++': concat,
    concat,
    find,
    filter,
    findIndex
};
