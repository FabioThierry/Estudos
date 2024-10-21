const { default: expect } = require("expect");
const reverseString = require("./reverseString");

test("Reverse any given string", () => {
  expect(reverseString("Dave")).toBe("evaD");
});
