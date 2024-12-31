import { countX_MAS, countXMAS, formatData } from "../src/day4";

const exampleXMAS = [
  ['M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M'],
  ['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'],
  ['A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M'],
  ['M', 'S', 'A', 'M', 'A', 'S', 'M', 'S', 'M', 'X'],
  ['X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M'],
  ['X', 'X', 'A', 'M', 'M', 'X', 'X', 'A', 'M', 'A'],
  ['S', 'M', 'S', 'M', 'S', 'A', 'S', 'X', 'S', 'S'],
  ['S', 'A', 'X', 'A', 'M', 'A', 'S', 'A', 'A', 'A'],
  ['M', 'A', 'M', 'M', 'M', 'X', 'M', 'M', 'M', 'M'],
  ['M', 'X', 'M', 'X', 'A', 'X', 'M', 'A', 'S', 'X']
]
test("day4.formatData", () => {
  expect(
    formatData([
      "MMMSXXMASM",
      "MSAMXMSMSA",
      "AMXSXMAAMM",
      "MSAMASMSMX",
      "XMASAMXAMM",
      "XXAMMXXAMA",
      "SMSMSASXSS",
      "SAXAMASAAA",
      "MAMMMXMMMM",
      "MXMXAXMASX"
    ])
  ).toStrictEqual(exampleXMAS)
})

test("day4.countXMAS correctly way horizontally", () => {
  expect(countXMAS([["X", "M", "A", "S"]])).toStrictEqual(1);
})
test("day4.countXMAS correctly horizontally reversed", () => {
  expect(countXMAS([["S", "A", "M", "X"]])).toStrictEqual(1);
})
test("day4.countXMAS correctly vertically", () => {
  expect(countXMAS([
    ["X", "M", "A", "E"],
    ["M", "M", "A", "E"],
    ["A", "M", "A", "E"],
    ["S", "M", "A", "E"]
  ])).toStrictEqual(1);
})
test("day4.countXMAS correctly vertically reversed", () => {
  expect(countXMAS([
    ["S", "M", "A", "E"],
    ["A", "M", "A", "E"],
    ["M", "M", "A", "E"],
    ["X", "M", "A", "E"]
  ])).toStrictEqual(1);
})
test("day4.countXMAS correctly diagonally reversed up", () => {
  expect(countXMAS([
    ["S", "M", "A", "E"],
    ["A", "A", "A", "E"],
    ["M", "M", "M", "E"],
    ["E", "M", "A", "X"]
  ])).toStrictEqual(1);
})
test("day4.countXMAS correctly diagonally down", () => {
  expect(countXMAS([
    ["X", "M", "A", "E"],
    ["A", "M", "A", "E"],
    ["M", "M", "A", "E"],
    ["E", "M", "A", "S"]
  ])).toStrictEqual(1);
})
test("day4.countXMAS correctly diagonally up", () => {
  expect(countXMAS([
    ["R", "M", "A", "S"],
    ["A", "M", "A", "E"],
    ["M", "M", "A", "E"],
    ["X", "M", "A", "E"]
  ])).toStrictEqual(1);
})
test("day4.countXMAS correctly diagonally reversed down", () => {
  expect(countXMAS([
    ["X", "M", "A", "X"],
    ["A", "M", "M", "E"],
    ["M", "A", "A", "E"],
    ["S", "M", "A", "E"]
  ])).toStrictEqual(1);
})

test("day4.countXMAS total count", () => {
  expect(countXMAS(exampleXMAS)).toStrictEqual(18)
})

test("day4.countX_MAS total correctly", () => {
  expect(countX_MAS(exampleXMAS)).toStrictEqual(9)
})
test("day4.countX_MAS correctly", () => {
  expect(countX_MAS([
    ["M", "X", "S"],
    ["M", "A", "S"],
    ["M", "X", "S"]
  ])).toStrictEqual(1)
})
