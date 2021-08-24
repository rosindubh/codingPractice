let app = require("./app");

test("should return 5 when given 2 and 3", () => {
  expect(app.add(2, 3)).toBe(5)
});

test("should expect Jimmy Page when given theObject.guitar", () => {
  expect(app.theObject.guitar).toBe("Jimmy Page")
});

test("should return phil when given", () => {
  expect(app.phil.name).toBe("Phil")
});
