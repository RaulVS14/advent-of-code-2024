import fs from "node:fs";

export const readFile = (file: string): string[] => {
  return fs.readFileSync(file, 'utf8').toString().trim().split('\n');
}
