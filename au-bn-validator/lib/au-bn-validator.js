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

    return abnSum > 0 && rem === 0;
};

exports.validateACN = validateACNorARBN;

exports.validateARBN = validateACNorARBN;

exports.validateTFN = function (tfn) {
    var weights = [1, 4, 3, 7, 5, 8, 6, 9, 10];
    var modulus = 11;

    if (typeof tfn === 'string') {
        tfn = tfn.replace(/\s/g, '').replace(/-/g, '').split('');
    }

    if (tfn.length !== 9) {
        return false;
    }

    var tfnSum = weights.map(function (val, index) {
        return val * tfn[index];
    }).reduce(function (p, w) {
        return p + w;
    }, 0);

    var rem = tfnSum % modulus;

    return tfnSum > 0 && rem === 0;
};

exports.validateMedicareNumber = function (mcn) {
    var weights = [1, 3, 7, 9, 1, 3, 7, 9];
    var modulus = 10;

    if (typeof mcn === 'string') {
        mcn = mcn.replace(/\s/g, '').replace(/-/g, '').replace(/\//g, '').split('');
    }

    if (mcn.length !== 11) {
        return false;
    }

    var mcnSum = weights.map(function (val, index) {
        return val * mcn[index];
    }).reduce(function (p, w) {
        return p + w;
    }, 0);

    var rem = mcnSum % modulus;

    return mcnSum > 0 && rem === parseInt(mcn[8]);
};

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

    return acnSum > 0 && rem === parseInt(acn[8]);
}