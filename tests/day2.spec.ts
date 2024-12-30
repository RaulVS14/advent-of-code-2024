import { formatData, safeReports, safeReportsWithError } from "../src/day2";

test("day2.formatValues", () => {
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
describe("day2.safeReportsWithError tolerate 1 error", () => {
  test("day2.safeReportsWithError correct on correct list", () => {
    expect(safeReportsWithError([[7, 6, 4, 2, 1]], 1)).toStrictEqual(1);
  })
  test("day2.safeReportsWithError incorrect on broken list", () => {
    expect(safeReportsWithError([[1, 2, 7, 8, 9]], 1)).toStrictEqual(0);
  })
  test("day2.safeReportsWithError incorrect on broken list II", () => {
    expect(safeReportsWithError([[9, 7, 6, 2, 1]], 1)).toStrictEqual(0);
  })
  test("day2.safeReportsWithError correct on correct list II", () => {
    expect(safeReportsWithError([[1, 3, 2, 4, 5]], 1)).toStrictEqual(1);
  })
  test("day2.safeReportsWithError correct on correct list III", () => {
    expect(safeReportsWithError([[8, 6, 4, 4, 1]], 1)).toStrictEqual(1);
  })
  test("day2.safeReportsWithError correct on correct list IV", () => {
    expect(safeReportsWithError([[1, 3, 6, 7, 9]], 1)).toStrictEqual(1);
  })
  test("day2.safeReportsWithError correct on correct list V", () => {
    expect(safeReportsWithError([[38, 41, 44, 47, 50, 47]], 1)).toStrictEqual(1);
  })
})
