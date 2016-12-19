'use strict';

module.exports = {
    fst: (...args) => args[0],
    snd: (...args) => args[1],
    tupleToList: (...args) => args,
    lastTuple: (...args) => args[args.length - 1]
};
