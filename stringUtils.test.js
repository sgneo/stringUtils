// const assert = require("assert")
// const expect = require("expect")
import { assert, expect } from 'chai';
import {isBlank, isEmpty} from "./index";

// todo assert not string errors;

const notStrings = {
  array: [],
  object: {},
  number: 1234,
  boolean: false,
  undefined: undefined,
  null: null
};

const strings = {
  empty: "",
  emptyWithSpaces: " ",
  emptyNotTrimmed: "       ",
  withCharacters: "a"
};

describe('stringUtils', () => {
  describe('#isEmpty()', () => {
    it('Throw error if param is not a string' , () => {
      Object.values(notStrings).forEach(value => {
        expect(()=> isEmpty(value)).to.throw("Required: string, received: something else");
      })
    });

    it('Expected empty string to be empty', () => {
      assert(isEmpty(strings.empty) === true);
    });

    it('Expected string with one space to not be empty', () => {
      assert(isEmpty(strings.emptyWithSpaces) === false);
    });

    it('Expected untrimmed string to not be empty', () => {
      assert(isEmpty(strings.emptyNotTrimmed) === false);
    });

    it('Expected string that contains characters to not be empty', () => {
      assert(isEmpty(strings.withCharacters) === false);
    })
  });

  describe('#isBlank()', () => {
    it('Throw error if param is not a string' , () => {
      Object.values(notStrings).forEach(value => {
        expect(()=> isBlank(value)).to.throw("Required: string, received: something else");
      })
    });

    it('Expected empty string to be blank', () => {
      assert(isBlank(strings.empty) === true);
    });

    it('Expected string that contains one space to be blank', () => {
      assert(isBlank(strings.emptyWithSpaces) === true);
    });

    it('Expected untrimmed string to be blank', () => {
      assert(isBlank(strings.emptyNotTrimmed) === true);
    });

    it('Expected string that contains characters to not be blank', () => {
      assert(isBlank(strings.withCharacters) === false);
    })
  })
});