"use strict";

exports.validateABN = function (abn) {
    var weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    var modulus = 89;

    if (typeof abn === 'string') {
        abn = abn.replace(/\s/g, '').replace(/-/g, '').split('');
    }

    if (abn.length !== 11) {
        return false;
    }

    var abnSum = weights.map(function (val, index) {
        return val * (abn[index] - (index ? 0 : 1));
    }).reduce(function (p, w) {
        return p + w;
    }, 0);

    var rem = abnSum % modulus;

    return rem === 0;
};

exports.validateACN = validateACNorARBN;

exports.validateARBN = validateACNorARBN;

function validateACNorARBN(acn) {
    var weights = [8, 7, 6, 5, 4, 3, 2, 1];
    var modulus = 10;

    if (typeof acn === 'string') {
        acn = acn.replace(/\s/g, '').replace(/-/g, '').split('');
    }

    if (acn.length !== 9) {
        return false;
    }

    var acnSum = weights.map(function (val, index) {
        return val * acn[index];
    }).reduce(function (p, w) {
        return p + w;
    }, 0);

    var rem = (modulus - (acnSum % modulus)) % modulus;

    return rem === parseInt(acn[8]);
}