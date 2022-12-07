// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar() tests written by Liz", () => {
    describe("error handling", () => {
        it("should return false if the shift amount is 0",() => {
            const message = "drake";
            const shift = 0;
            const actual = caesar(message, shift);
            const expected = false;

            expect(actual).to.equal(expected);
        });
        it("should return false if the shift amount is above 25", () => {
            const message = "drake";
            const shift = 26;
            const actual = caesar(message, shift);
            const expected = false;

            expect(actual).to.equal(expected);
        });
        it("should return false if the shift amount is less than -25", () => {
            const message = "drake"
            const shift = -26;
            const actual = caesar(message, shift);
            const expected = false;

            expect(actual).to.equal(expected);
        });
    });
    describe("encoding message", () => {
        it("should encode a message by shifting the letters", () => {
            const message = "drake";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "gudnh";

            expect(actual).to.equal(expected);
        });
        it("should leave spaces and other symbols as is", () => {
            const message = "metro boomin";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "phwur errplq";

            expect(actual).to.equal(expected);
        })
        it("should ignore capital letters", () => {
            const message = "DrAkE";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "gudnh";

            expect(actual).to.equal(expected);
        });
        it("should appropriately handle letters at the end of the alphabet", () => {
            const message = "drake";
            const shift = 10;
            const actual = caesar(message, shift);
            const expected = "nbkuo";

            expect(actual).to.equal(expected);
        });
        it("should allow for a negative shift that will shift characters to the left", () => {
            const message = "drake";
            const shift = -3;
            const actual = caesar(message, shift);
            const expected = "aoxhb";

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding message", () => {
        it("should decode a message by shifting the letters in the opposite direction", () => {
            const message = "drake";
            const shift = 3;
            const encode = false
            const actual = caesar(message, shift, encode);
            const expected = "aoxhb";

            expect(actual).to.equal(expected);
        });
        it("should leave spaces and other symbols as is", () => {
            const message = "metro boomin";
            const shift = 3;
            const encode = false;
            const actual = caesar(message, shift, encode);
            const expected = "jbqol ylljfk";

            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const message = "DrAkE";
            const shift = 3;
            const encode = false
            const actual = caesar(message, shift, encode);
            const expected = "aoxhb";

            expect(actual).to.equal(expected);
        });
        it("should appropriately handle letters at the end of the alphabet", () => {
            const message = "drake";
            const shift = 10;
            const encode = false
            const actual = caesar(message, shift, encode);
            const expected = "thqau";

            expect(actual).to.equal(expected);
        });
        it("should allow for a negative shift that will shift characters to the left", () => {
            const message = "drake";
            const shift = -3;
            const encode = false;
            const actual = caesar(message, shift, encode);
            const expected = "gudnh";

            expect(actual).to.equal(expected);
        });
    });
});