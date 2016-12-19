'use strict';

let {
    get
} = require('bolzano');

module.exports = {
    apply: (obj, funName, args) => {
        let fun = get(obj, funName);
        let parts = funName.split('.');
        parts.pop();
        let ctx = get(obj, parts.join('.'));

        return fun.apply(ctx, args);
    }
};
