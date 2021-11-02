import sum from "./util-1";

test("adds 1 + 2 to equal 3", () => {
  // .toBe tests for "===" exact equal
  expect(sum(1, 2)).toBe(3);
});
