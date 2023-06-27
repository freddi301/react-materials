import { makeCalculations } from "./my-business-logic";

// this is a business logic unit test

test("makeCalculations", () => {
  expect(makeCalculations(1, 1)).toBe(2);
  expect(makeCalculations(2, 2)).toBe(4);
});
