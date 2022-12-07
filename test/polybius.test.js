const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius() tests written by Liz", () => {
    describe("encoding messages", () => {
        it("should encode a message by translating each letter to its number pair", () => {
            const message = "drake";
            const actual = polybius(message);
            const expected = "4124115251";

            expect(actual).to.equal(expected);
        });
        it("should translate both the 'i' and 'j' to 42", () => {
            const message = "JID";
            const actual = polybius(message);
            const expected = "424241"

            expect(actual).to.equal(expected);
        });
        it("should leave spaces as is", () => {
            const message = "the weeknd";
            const actual = polybius(message);
            const expected = "443251 255151523341"

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding messages", () => {
        it("should decode a message by translating each numbers to its letter pair", () => {
            const message = "4124115251";
            const actual = polybius(message, false);
            const expected = "drake";

            expect(actual).to.equal(expected);
        });
        it("should translate 42 to both 'i' and 'j'", () => {
            const message = "424241";
            const actual = polybius(message, false);
        
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });
        it("should leave spaces as is", () => {
            const message = "443251 255151523341"
            const actual = polybius(message, false);
            const expected = "the weeknd"

            expect(actual).to.equal(expected);
        });
        it("should return false if the length of all numbers is odd", () => {
            const message = "414351123"
            const actual = polybius(message, false);
            const expected = false;

            expect(actual).to.equal(expected);
        });
    });
});