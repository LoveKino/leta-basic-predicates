'use strict';

let {
    exist, any
} = require('bolzano');

let {
    isFunction, listType
} = require('basetype');

let functionListType = listType(isFunction);

module.exports = {
    '&&': (a, b) => a && b,

    '||': (a, b) => a || b,

    '!': (v) => !v,

    and: (...args) => {
        return any(args, (v) => !!v);
    },

    or: (...args) => {
        return exist(args, (v) => !!v);
    },

    not: (v) => !v,

    andf: (...args) => {
        functionListType(args);
        return any(args, (v) => !!v());
    },

    orf: (...args) => {
        functionListType(args);
        return exist(args, (v) => !!v());
    }
};
