// const assert = require("assert")
// const expect = require("expect")
import {assert, expect} from 'chai';
import {isBlank, isEmpty, startsWith, trimStart, trimEnd} from "./index";

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
    it('Throw error if param is not a string', () => {
      Object.values(notStrings).forEach(value => {
        expect(() => isEmpty(value)).to.throw("Required: string, received: something else");
      })
    });

    it('Expected empty string to be empty', () => {
      assert(isEmpty(strings.empty) === true, "empty string should be empty");
    });

    it('Expected string with one space to not be empty', () => {
      assert(isEmpty(strings.emptyWithSpaces) === false, "string with spaces should not be empty");
    });

    it('Expected untrimmed string to not be empty', () => {
      assert(isEmpty(strings.emptyNotTrimmed) === false, "non trimmed string should not be empty");
    });

    it('Expected string that contains characters to not be empty', () => {
      assert(isEmpty(strings.withCharacters) === false, "string that contains characters should not be empty");
    })
  });

  describe('#isBlank()', () => {
    it('Throw error if param is not a string', () => {
      Object.values(notStrings).forEach(value => {
        expect(() => isBlank(value)).to.throw("Required: string, received: something else");
      })
    });

    it('Expected empty string to be blank', () => {
      assert(isBlank(strings.empty) === true, "empty string should be blank");
    });

    it('Expected string that contains one space to be blank', () => {
      assert(isBlank(strings.emptyWithSpaces) === true, "string that contains one space should be blank");
    });

    it('Expected untrimmed string to be blank', () => {
      assert(isBlank(strings.emptyNotTrimmed) === true, "untrimmed string should be blanked");
    });

    it('Expected string that contains characters to not be blank', () => {
      assert(isBlank(strings.withCharacters) === false, "string that contains characters should not be blank");
    })
  });

  describe('#startsWith()', () => {
    it('Throw error if param is not a string', () => {
      Object.values(notStrings).forEach(value => {
        Object.values(notStrings).forEach(value2 => {
          expect(() => startsWith(value, value2)).to.throw("Required: string, received: something else");
        })
      })
    });

    it('Expected string to start with empty string', () => {
      const str1 = "";
      const str2 = "test";

      assert(startsWith(str2, str1) === true, "string should startWith empty string");
    });

    it('Expected string to not start with blank string', () => {
      const str1 = " ";
      const str2 = "test";

      assert(startsWith(str2, str1) === false, "string should not start with spaces");
    });

    it('Expected string to start with character', () => {
      const str1 = "t";
      const str2 = "test";

      assert(startsWith(str2, str1) === true, "string 'test' starts with 't'");
    });

    it('Expected string to not start with character', () => {
      const str1 = "@";
      const str2 = "test";

      assert(startsWith(str2, str1) === false, "string 'test' doesn't start with '@'");
    });

    it('Expected string to not start with string', () => {
      const str1 = "abc";
      const str2 = "abctest";

      assert(startsWith(str2, str1) === true, "string 'abctest' starts with 'abc'");
    });

    it('Expected string to not start with string', () => {
      const str1 = "a@bc";
      const str2 = "abctest";

      assert(startsWith(str2, str1) === false, "string 'abctest' doesn't start with 'bc'");
    });

    it('Expected string to not start with untrimmed string', () => {
      const str1 = "a b";
      const str2 = "abtest";

      assert(startsWith(str2, str1) === false, "string 'ab' doesn't start with 'a b'");
    });

  });

  describe('#trimStart()', () => {
    it('Throw error if param is not a string', () => {
      Object.values(notStrings).forEach(value => {
        expect(() => trimStart(value)).to.throw("Required: string, received: something else");
      })
    });

    it('Expected return of the same value for trimmed string', () => {
      const trimmedString = "abc";
      const res = trimStart(trimmedString);

      expect(() => res.to.equal(trimmedString));
    });

    it('Expected return of the same value for left trimmed  string', () => {
      const str = "abc     ";
      const res = trimStart(str);

      expect(() => res.to.equal(str));
    });

    it('Expected trim left of empty string to be same as empty string', () => {
      const str = "abc     ";
      const res = trimStart(str);

      expect(() => res.to.equal(str));
    });

    it('expect blank string to be equal to empty string', () => {
      const str = " ";
      const res = trimStart(str);

      expect(() => res.to.equal(""));
    });

    it('expect blank string to be equal to empty string', () => {
      const str = " ";
      const res = trimStart(str);

      expect(() => res.to.equal(""));
    });

    it('expect to trim the start of the string', () => {
      const str = "    abc";
      const res = trimStart(str);

      expect(() => res.to.equal("abc"));
    });
  });

  describe('#trimEnd()', () => {
    it('Throw error if param is not a string', () => {
      Object.values(notStrings).forEach(value => {
        expect(() => trimEnd(value)).to.throw("Required: string, received: something else");
      })
    });

    it('Expected return of the same value for trimmed string', () => {
      const trimmedString = "abc";
      const res = trimEnd(trimmedString);

      expect(() => res.to.equal(trimmedString));
    });

    it('Expected return of the same value for left trimmed  string', () => {
      const str = "    abc";
      const res = trimEnd(str);

      expect(() => res.to.equal(str));
    });

    it('Expected trim right of empty string to be same as empty string', () => {
      const str = "      abc";
      const res = trimEnd(str);

      expect(() => res.to.equal(str));
    });

    it('expect blank string to be equal to empty string', () => {
      const str = " ";
      const res = trimEnd(str);

      expect(() => res.to.equal(""));
    });

    it('expect blank string to be equal to empty string', () => {
      const str = " ";
      const res = trimEnd(str);

      expect(() => res.to.equal(""));
    });

    it('expect to trim the end of the string', () => {
      const str = "abc      ";
      const res = trimEnd(str);

      expect(() => res.to.equal("abc"));
    });
  });
});