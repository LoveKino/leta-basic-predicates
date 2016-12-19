'use strict';

let {
    funType, isFunction
} = require('basetype');

/**
 * if expression then expression
 */
module.exports = {
    condition: funType((c, r1, r2) => {
        if (c()) {
            return r1();
        } else {
            return r2();
        }
    }, [
        isFunction,
        isFunction,
        isFunction
    ])
};
