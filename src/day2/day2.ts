import { readFile } from "@/utils";

export const formatData = (data: string[]) => {
  return data.map((line) => {
    return line.trim().split(' ').map(Number);
  })
}
export const safeReports = (data: number[][]): number => {
  let validReportsCount = 0;
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (isMonotonicAndMaxDifferenceOfThree(row)) {
      validReportsCount++;
    }
  }
  return validReportsCount;
}

function isMonotonicAndMaxDifferenceOfThree(row: number[]): boolean {
  let direction;
  let isValid = true;
  let count = 0;
  while (isValid && count < row.length - 1) {
    const curEl = row[count];
    const nextEl = row[count + 1];
    const diff = nextEl - curEl;
    if (count === 0) {
      direction = diff < 0 ? -1 : 1;
    }
    if (Math.abs(diff) > 3 || diff === 0 || (direction === -1 && diff > 0) || (direction === 1 && diff < 0)) {
      isValid = false;
    }
    count++;
  }
  return isValid;
}

function isValidWithError(row: number[], count: number): boolean {
  let isValid = false;
  let idx = 0;
  while (!isValid && idx <= row.length - count) {
    const newRow = row.toSpliced(idx, count);
    if (isMonotonicAndMaxDifferenceOfThree(newRow)) {
      isValid = true;
    }
    idx++;
  }
  return isValid;
}

export const safeReportsWithError = (data: number[][], errorCount: number): number => {
  let validReportsCount = 0;
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (isMonotonicAndMaxDifferenceOfThree(row) || isValidWithError(row, errorCount)) {
      validReportsCount++;
    }
  }
  return validReportsCount;
}
if (process.env.MAIN) {
  const fileContent = readFile('data\\day2\\input.txt');
  console.log("Results for day 2:");
  console.log("Part 1:", safeReports(formatData(fileContent)));
  console.log("Part 2:", safeReportsWithError(formatData(fileContent), 1));
}
