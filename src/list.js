'use strict';

let {
    map, reduce, reverse
} = require('bolzano');

module.exports = {
    map,
    reduce,
    reverse,
    concat: (list1, list2) => list1.concat(list2)
};
