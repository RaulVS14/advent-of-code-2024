import { readFile } from "@/utils";

export const formatData = (data: string[]): number[][][] => {
  return data.map((line) => {
    const reg = new RegExp("mul\\((\\d{1,3}),(\\d{1,3})\\)", 'g');
    const multList: number[][] = [];
    for (const match of line.matchAll(reg)) {
      multList.push([Number(match[1]), Number(match[2])])
    }
    return multList;
  })
}
export const formatDataWithDont = (data: string[]): number[][][] => {
  const formattedData = data.map((line) => {
    const reg = new RegExp("(don't\\(\\))|(do\\(\\))|mul\\((\\d{1,3}),(\\d{1,3})\\)", 'g');
    const multList: number[][] = [];
    for (const match of line.matchAll(reg)) {
      if (match[0] === "don't()") {
        multList.push([0]);
      } else if (match[0] === "do()") {
        multList.push([1]);
      } else {
        multList.push([Number(match[3]), Number(match[4])])
      }
    }

    return multList;
  })
  let addElement = true;
  return formattedData.map((row) => {
    return row.filter((item) => {
      if (item.length === 1) {
        addElement = Boolean(item[0]);
        return false;
      }
      if (addElement) {
        return item;
      }
      return false;
    })
  });
}
export const addMultiplications = (data: number[][][]): number => {
  let result = 0;
  for (const line of data) {
    result += line.reduce((previousValue, currentValue) => {
      return previousValue + currentValue[0] * currentValue[1];
    }, 0);
  }
  return result;
}

if (process.env.MAIN) {
  console.log("Results:");
  console.log(addMultiplications(formatData(readFile('data\\day3\\input.txt'))));
  console.log(addMultiplications(formatDataWithDont(readFile('data\\day3\\input.txt'))));
}
