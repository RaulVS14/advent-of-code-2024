import { readFile } from "@/utils";


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
export const sumDistanceValues = (data: number[][]): number => {
  const first = data[0];
  const last = data[1];
  let sum = 0;
  for (let i = 0; i < first.length; i++) {
    sum += Math.abs(last[i] - first[i]);
  }
  return sum;
}
export const similarityScore = (data: number[][]): number => {
  const first = data[0];
  const last = data[1];
  let sum = 0;
  for (let i = 0; i < first.length; i++) {
    const currentElement = first[i];
    const elementList = last.filter((el) => el === first[i]);
    sum += currentElement * elementList.length;
  }
  return sum;
}

if (process.env.MAIN) {
  const fileContent = readFile('data\\day1\\input.txt');
  console.log("Results for day 1:");
  console.log("Part 1:", sumDistanceValues(formatData(fileContent)));
  console.log("Part 2:", similarityScore(formatData(fileContent)));
}
