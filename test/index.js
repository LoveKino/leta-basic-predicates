'use strict';

let {
    condition
} = require('..');

let assert = require('assert');

describe('index', () => {
    it('base', () => {
        let c = 2;
        let ret = condition(() => {
            return c > 0;
        }, () => c + 1, () => c + 2);

        assert.equal(ret, 3);
    });
});
