'use strict';

let {
    get
} = require('bolzano');

let {
    isFunction, likeArray, funType, isObject, isString
} = require('basetype');

module.exports = {
    apply: funType((obj, funName, args) => {
        let fun = get(obj, funName);
        if (!isFunction(fun)) {
            throw new Error(`${fun} is not a function. get(${obj}, ${funName})`);
        }

        let parts = funName.split('.');
        parts.pop();
        let ctx = get(obj, parts.join('.'));

        return fun.apply(ctx, args);
    }, [
        isObject,
        isString,
        likeArray
    ])
};
