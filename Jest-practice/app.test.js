let app = require("./app");

test("should return 5 when given 2 and 3", () => {
  expect(app.add(2, 3)).toBe(5)
});

