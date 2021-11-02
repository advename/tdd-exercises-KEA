import commentHandler from "./util-3";
import mockData from "./mockData";

test("Get highest liked comment", () => {
  // .toEqual tests for "==" (not-exact equal), meaning it only looks at the value but not the type.
  // It should be noted that two same valued objects are not exact equal:
  //    - {a:1} === {a:1} fails
  //    - {a:1} == {a:1} succeeds
  expect(commentHandler(mockData)).toEqual({
    id: 5,
    username: "dclaw4",
    comment: "integer pede justo lacinia eget tincidunt eget tempus vel pede",
    likes: 4
  });
});
