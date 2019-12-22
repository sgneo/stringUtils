"use strict";

var _chai = require("chai");

var _index = require("./index");

// const assert = require("assert")
// const expect = require("expect")
// todo assert not string errors;
var notStrings = {
  array: [],
  object: {},
  number: 1234,
  "boolean": false,
  undefined: undefined,
  "null": null
};
var strings = {
  empty: "",
  emptyWithSpaces: " ",
  emptyNotTrimmed: "       ",
  withCharacters: "a"
};
describe('stringUtils', function () {
  describe('#isEmpty()', function () {
    it('Throw error if param is not a string', function () {
      Object.values(notStrings).forEach(function (value) {
        (0, _chai.expect)(function () {
          return (0, _index.isEmpty)(value);
        }).to["throw"]("Required: string, received: something else");
      });
    });
    it('Expected empty string to be empty', function () {
      (0, _chai.assert)((0, _index.isEmpty)(strings.empty) === true, "empty string should be empty");
    });
    it('Expected string with one space to not be empty', function () {
      (0, _chai.assert)((0, _index.isEmpty)(strings.emptyWithSpaces) === false, "string with spaces should not be empty");
    });
    it('Expected untrimmed string to not be empty', function () {
      (0, _chai.assert)((0, _index.isEmpty)(strings.emptyNotTrimmed) === false, "non trimmed string should not be empty");
    });
    it('Expected string that contains characters to not be empty', function () {
      (0, _chai.assert)((0, _index.isEmpty)(strings.withCharacters) === false, "string that contains characters should not be empty");
    });
  });
  describe('#isBlank()', function () {
    it('Throw error if param is not a string', function () {
      Object.values(notStrings).forEach(function (value) {
        (0, _chai.expect)(function () {
          return (0, _index.isBlank)(value);
        }).to["throw"]("Required: string, received: something else");
      });
    });
    it('Expected empty string to be blank', function () {
      (0, _chai.assert)((0, _index.isBlank)(strings.empty) === true, "empty string should be blank");
    });
    it('Expected string that contains one space to be blank', function () {
      (0, _chai.assert)((0, _index.isBlank)(strings.emptyWithSpaces) === true, "string that contains one space should be blank");
    });
    it('Expected untrimmed string to be blank', function () {
      (0, _chai.assert)((0, _index.isBlank)(strings.emptyNotTrimmed) === true, "untrimmed string should be blanked");
    });
    it('Expected string that contains characters to not be blank', function () {
      (0, _chai.assert)((0, _index.isBlank)(strings.withCharacters) === false, "string that contains characters should not be blank");
    });
  });
  describe('#startsWith()', function () {
    it('Throw error if param is not a string', function () {
      Object.values(notStrings).forEach(function (value) {
        Object.values(notStrings).forEach(function (value2) {
          (0, _chai.expect)(function () {
            return (0, _index.startsWith)(value, value2);
          }).to["throw"]("Required: string, received: something else");
        });
      });
    });
    it('Expected string to start with empty string', function () {
      var str1 = "";
      var str2 = "test";
      (0, _chai.assert)((0, _index.startsWith)(str2, str1) === true, "string should startWith empty string");
    });
    it('Expected string to not start with blank string', function () {
      var str1 = " ";
      var str2 = "test";
      (0, _chai.assert)((0, _index.startsWith)(str2, str1) === false, "string should not start with spaces");
    });
    it('Expected string to start with character', function () {
      var str1 = "t";
      var str2 = "test";
      (0, _chai.assert)((0, _index.startsWith)(str2, str1) === true, "string 'test' starts with 't'");
    });
    it('Expected string to not start with character', function () {
      var str1 = "@";
      var str2 = "test";
      (0, _chai.assert)((0, _index.startsWith)(str2, str1) === false, "string 'test' doesn't start with '@'");
    });
    it('Expected string to not start with string', function () {
      var str1 = "abc";
      var str2 = "abctest";
      (0, _chai.assert)((0, _index.startsWith)(str2, str1) === true, "string 'abctest' starts with 'abc'");
    });
    it('Expected string to not start with string', function () {
      var str1 = "a@bc";
      var str2 = "abctest";
      (0, _chai.assert)((0, _index.startsWith)(str2, str1) === false, "string 'abctest' doesn't start with 'bc'");
    });
    it('Expected string to not start with untrimmed string', function () {
      var str1 = "a b";
      var str2 = "abtest";
      (0, _chai.assert)((0, _index.startsWith)(str2, str1) === false, "string 'ab' doesn't start with 'a b'");
    });
  });
  describe('#trimStart()', function () {
    it('Throw error if param is not a string', function () {
      Object.values(notStrings).forEach(function (value) {
        (0, _chai.expect)(function () {
          return (0, _index.trimStart)(value);
        }).to["throw"]("Required: string, received: something else");
      });
    });
    it('Expected return of the same value for trimmed string', function () {
      var trimmedString = "abc";
      var res = (0, _index.trimStart)(trimmedString);
      (0, _chai.expect)(function () {
        return res.to.equal(trimmedString);
      });
    });
    it('Expected return of the same value for left trimmed  string', function () {
      var str = "abc     ";
      var res = (0, _index.trimStart)(str);
      (0, _chai.expect)(function () {
        return res.to.equal(str);
      });
    });
    it('Expected trim left of empty string to be same as empty string', function () {
      var str = "abc     ";
      var res = (0, _index.trimStart)(str);
      (0, _chai.expect)(function () {
        return res.to.equal(str);
      });
    });
    it('expect blank string to be equal to empty string', function () {
      var str = " ";
      var res = (0, _index.trimStart)(str);
      (0, _chai.expect)(function () {
        return res.to.equal("");
      });
    });
    it('expect blank string to be equal to empty string', function () {
      var str = " ";
      var res = (0, _index.trimStart)(str);
      (0, _chai.expect)(function () {
        return res.to.equal("");
      });
    });
    it('expect to trim the start of the string', function () {
      var str = "    abc";
      var res = (0, _index.trimStart)(str);
      (0, _chai.expect)(function () {
        return res.to.equal("abc");
      });
    });
  });
  describe('#trimEnd()', function () {
    it('Throw error if param is not a string', function () {
      Object.values(notStrings).forEach(function (value) {
        (0, _chai.expect)(function () {
          return (0, _index.trimEnd)(value);
        }).to["throw"]("Required: string, received: something else");
      });
    });
    it('Expected return of the same value for trimmed string', function () {
      var trimmedString = "abc";
      var res = (0, _index.trimEnd)(trimmedString);
      (0, _chai.expect)(function () {
        return res.to.equal(trimmedString);
      });
    });
    it('Expected return of the same value for left trimmed  string', function () {
      var str = "    abc";
      var res = (0, _index.trimEnd)(str);
      (0, _chai.expect)(function () {
        return res.to.equal(str);
      });
    });
    it('Expected trim right of empty string to be same as empty string', function () {
      var str = "      abc";
      var res = (0, _index.trimEnd)(str);
      (0, _chai.expect)(function () {
        return res.to.equal(str);
      });
    });
    it('expect blank string to be equal to empty string', function () {
      var str = " ";
      var res = (0, _index.trimEnd)(str);
      (0, _chai.expect)(function () {
        return res.to.equal("");
      });
    });
    it('expect blank string to be equal to empty string', function () {
      var str = " ";
      var res = (0, _index.trimEnd)(str);
      (0, _chai.expect)(function () {
        return res.to.equal("");
      });
    });
    it('expect to trim the end of the string', function () {
      var str = "abc      ";
      var res = (0, _index.trimEnd)(str);
      (0, _chai.expect)(function () {
        return res.to.equal("abc");
      });
    });
  });
});