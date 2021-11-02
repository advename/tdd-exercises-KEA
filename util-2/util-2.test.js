import percentage from "./util-2";

test("Percentage of 2 from 10 equals to 20", () => {
  // .toBe tests for "===" exact equal
  expect(percentage(10, 2)).toBe(20);
});
