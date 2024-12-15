import { formatData, safeReports } from "../src/day2";

test("day1.formatValues", () => {
  expect(formatData(['3 2 4'])).toStrictEqual([[3, 2, 4]]);
});

describe("day2.safeReports", () => {
  test("day2.safeReports too big step", () => {
    expect(safeReports([[3, 7]])).toStrictEqual(0);
  })
  test("day2.safeReports equal numbers", () => {
    expect(safeReports([[3, 3]])).toStrictEqual(0);
  })
  test("day2.safeReports descending", () => {
    expect(safeReports([[3, 1]])).toStrictEqual(1);
  })
  test("day2.safeReports ascending", () => {
    expect(safeReports([[1, 3]])).toStrictEqual(1);
  })
})
