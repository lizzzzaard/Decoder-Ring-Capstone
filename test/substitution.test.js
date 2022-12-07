const expect = require("chai").expect
const { substitution } = require("../src/substitution")

describe("substitution() tests written by Liz", () => {
    describe("error handling", () => {
        it("should return false if the substitution alphabet is missing", () => {
            const message = "drake";
            const actual = substitution(message);
            const expected = false;

            expect(actual).to.equal(expected);
        });
        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
            const message = "drake";
            const alphabet = "russ";
            const actual = substitution(message, alphabet);
            const expected = false;

            expect(actual).to.equal(expected);
        });
        it("should return false if the substitution alphabet does not contain unique characters", () => {
            const message = "drake";
            const alphabet = "chancetherapperisthebestrapper"
            const actual = substitution(message, alphabet);
            const expected = false;

            expect(actual).to.equal(expected);
        });
    })
    describe("encoding messages", () => {
        it("should encode a message by using the given alphabet", () => {
            const message = "drake";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet);
            const expected = "rkqat";

            expect(actual).to.equal(expected);
        });
        it("should work with special characters", () => {
            const message = "drake";
            const alphabet = "@qwerty&uiopasdfghjklzxcv#";
            const actual = substitution(message, alphabet);
            const expected = "eh@or";

            expect(actual).to.equal(expected);
        });
        it("should preseve spaces", () => {
            const message = "metro boomin";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet);
            const expected = "dtzkg wggdof"

            expect(actual).to.equal(expected);
        });
    })
    describe("decoding messages", () => {
        it("should decode a message by using the given alphabet", () => {
            const message = "rkqat";
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet, false);
            const expected = "drake";

            expect(actual).to.equal(expected);
        });
        it("should work with special characters", () => {
            const message = "eh@or";
            const alphabet = "@qwerty&uiopasdfghjklzxcv#";
            const actual = substitution(message, alphabet, false);
            const expected = "drake"

            expect(actual).to.equal(expected);
        });
        it("should preserve spaces", () => {
            const message = "dtzkg wggdof"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const actual = substitution(message, alphabet, false);
            const expected = "metro boomin";

            expect(actual).to.equal(expected);
        });
    });
});