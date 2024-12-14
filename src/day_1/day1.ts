import fs from 'node:fs';

const readFile = (file: string): string[] => {
  return fs.readFileSync(file, 'utf8').toString().trim().split('\n');
}
export const formatData = (data: string[]) => {
  const col1: number[] = [];
  const col2: number[] = [];
  data.map((line) => {
    const [el1, el2]: number[] = line.trim().split('   ').map(Number);
    col1.push(el1);
    col2.push(el2);
  })
  return [col1.sort(), col2.sort()];
}
export const sumDistanceValues = (data: number[][]) => {
  const first = data[0];
  const last = data[1];
  let sum = 0;
  for (let i = 0; i < first.length; i++) {
    sum += Math.abs(last[i] - first[i]);
  }
  return sum;
}
console.log(sumDistanceValues(formatData(readFile('data\\day1\\input.txt'))));
