const isPalindrome = require("./isPalindrome");

test("Tacocat returns true", () => {
  expect(isPalindrome("Tacocat")).toBe(true);
});
test("Dave returns true", () => {
  expect(isPalindrome("Dave")).toBe(false);
});
