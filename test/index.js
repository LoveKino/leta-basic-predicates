'use strict';

let {
    condition, apply
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

    it('apply', () => {
        let ret1 = apply({
            succ: (v) => ++v
        }, 'succ', [3]);
        assert.equal(ret1, 4);

        let ret2 = apply({
            math: {
                add: (a, b) => a + b
            }
        }, 'math.add', [3, 4]);
        assert.equal(ret2, 7);
    });
});
