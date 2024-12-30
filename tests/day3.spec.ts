import { addMultiplications, formatData, formatDataWithDont } from "../src/day3";

test('day3.formatData', () => {
  expect(formatData(["xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"])).toStrictEqual(
    [
      [[2, 4], [5, 5], [11, 8], [8, 5]]
    ]
  )
});test('day3.formatDataWithDont', () => {
  expect(formatDataWithDont(["xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"])).toStrictEqual(
    [
      [[2, 4], [8, 5]]
    ]
  )
});
test('day3.addMultiplications', () => {
  expect(addMultiplications([
    [[2, 4], [5, 5], [11, 8], [8, 5]]
  ])).toStrictEqual(
    161
  )
});


