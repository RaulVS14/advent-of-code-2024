import fs from 'node:fs';

const readFile = (file: string): string[] => {
  return fs.readFileSync(file, 'utf8').toString().trim().split('\n');
}
export const formatData = (data: string[]) => {
  return data.map((line) => {
    return line.trim().split(' ').map(Number);
  })
}
export const safeReports = (data: number[][]): number => {
  let validReportsCount = 0;
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    let isValid = true;
    let direction;
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
    if (isValid) {
      validReportsCount++;
    }
  }
  return validReportsCount;
}

console.log(safeReports(formatData(readFile('data\\day2\\input.txt'))));
// console.log(safeReports(formatData(readFile('data\\day1\\input.txt'))));
