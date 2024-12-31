import { readFile } from "@/utils";

export const formatData = (data: string[]) => {
  return data
}

if (process.env.MAIN) {
  const fileContent = readFile('data\\day5\\input.txt');
  console.log("Results for day 5:");
  console.log("Part 1:", formatData(fileContent));
  console.log("Part 2:", formatData(fileContent));
}
