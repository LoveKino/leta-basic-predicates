'use strict';

let {
    mergeMap
} = require('bolzano');

let {
    set, get
} = require('jsenhance');

module.exports = {
    mergeMap,
    get,
    set: (sandbox, name, value) => {
        if (!set(sandbox, name, value)) {
            throw new Error(`fail to set prop ${name} to object ${sandbox} of value ${value}`);
        }

        return sandbox;
    }
};
