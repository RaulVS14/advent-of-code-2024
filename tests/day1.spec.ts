import { formatData, similarityScore, sumDistanceValues } from "../src/day_1/day1";

test("day1.formatValues", () => {
  expect(formatData(['3   2'])).toStrictEqual([[3], [2]]);
});

test("day1.sumValues", () => {
  expect(sumDistanceValues([[3], [1]])).toStrictEqual(2);
});

test("day1.similarityScore", () => {
  expect(similarityScore([[3, 4, 5], [1, 3, 3]])).toStrictEqual(6);
});
