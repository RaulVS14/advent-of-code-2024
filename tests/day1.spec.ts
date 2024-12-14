import { formatData, sumDistanceValues } from "../src/day_1/day1";

test("day1.formatValues", () => {
  expect(formatData(['3   2'])).toStrictEqual([[3], [2]]);
});
test("day1.sumValues", () => {
  expect(sumDistanceValues([[3],[1]])).toStrictEqual(2);
});
