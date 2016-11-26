"use strict";

var assert = require('assert');
var path = require('path');

var validator = require(path.resolve(__dirname, '../lib/au-bn-validator'));

describe('ABN Validator', function () {

    it('should return true for valid ABNs', function () {

        var abns = ['83 914 571 673', '83914571673'];

        abns.forEach(function (abn) {
            assert.equal(validator.validateABN(abn), true);
        });

    });

    it('should return false for invalid ABNs', function () {

        var abns = ['', '0', '00 000 000 000'];

        abns.forEach(function (abn) {
            assert.equal(validator.validateABN(abn), false);
        });

    });

});

describe('ACN Validator', function () {

    it('should return true for valid ACNs', function () {

        var acns = ['010 499 966', '010499966'];

        acns.forEach(function (acn) {
            assert.equal(validator.validateACN(acn), true);
        });

    });

    it('should return false for invalid ACNs', function () {

        var acns = ['', '0', '000 000 001'];

        acns.forEach(function (acn) {
            assert.equal(validator.validateACN(acn), false);
        });

    });

});