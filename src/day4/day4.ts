import {readFile} from "@/utils";

export const formatData = (data: string[]) => {
    return data.map(str => str.split(''));
}
const horizontalXMAS = (data: string[][], i: number, j: number) => {
    if ((j > data[i].length - 4)) {
        return false;
    }
    let word = [
        data[i][j],
        data[i][j + 1],
        data[i][j + 2],
        data[i][j + 3],
    ]
    return word.join('') === 'XMAS';
}
const reverseHorizontalXMAS = (data: string[][], i: number, j: number) => {
    if ((j - 3 < 0)) {
        return false;
    }
    let word = [
        data[i][j],
        data[i][j - 1],
        data[i][j - 2],
        data[i][j - 3],
    ]
    return word.join('') === 'XMAS';
}
const verticalXMAS = (data: string[][], i: number, j: number) => {
    if ((i > data.length - 4)) {
        return false;
    }
    let word = [
        data[i][j],
        data[i + 1][j],
        data[i + 2][j],
        data[i + 3][j],
    ]
    return word.join('') === 'XMAS';
}
const reverseVerticalXMAS = (data: string[][], i: number, j: number) => {
    if ((i - 3 < 0)) {
        return false;
    }
    let word = [
        data[i][j],
        data[i - 1][j],
        data[i - 2][j],
        data[i - 3][j],
    ]
    return word.join('') === 'XMAS';
}
const diagonalUpLeft = (data: string[][], i: number, j: number) => {
    if ((i - 3 < 0) || (j - 3 < 0)) {
        return false;
    }
    let word = [
        data[i][j],
        data[i - 1][j - 1],
        data[i - 2][j - 2],
        data[i - 3][j - 3],
    ]
    return word.join('') === 'XMAS';
}
const diagonalBottomRight = (data: string[][], i: number, j: number) => {
    if ((i > data.length - 4) || (j > data[i].length - 4)) {
        return false;
    }
    let word = [
        data[i][j],
        data[i + 1][j + 1],
        data[i + 2][j + 2],
        data[i + 3][j + 3],
    ]
    return word.join('') === 'XMAS';
}
const diagonalBottomLeft = (data: string[][], i: number, j: number) => {
    if ((i > data.length - 4) || (j - 3 < 0)) {
        return false;
    }
    let word = [
        data[i][j],
        data[i + 1][j - 1],
        data[i + 2][j - 2],
        data[i + 3][j - 3],
    ]
    return word.join('') === 'XMAS';
}
const diagonalUpRight = (data: string[][], i: number, j: number) => {
    if ((i - 3 < 0) || (j > data[i].length - 4)) {
        return false;
    }
    let word = [
        data[i][j],
        data[i - 1][j + 1],
        data[i - 2][j + 2],
        data[i - 3][j + 3],
    ]
    return word.join('') === 'XMAS';
}

export const countXMAS = (data: string[][]) => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            // XMAS ->
            if (horizontalXMAS(data, i, j)) {
                count++;
            }
            // SAMX <-
            if (reverseHorizontalXMAS(data, i, j)) {
                count++;
            }
            // XMAS \/
            if (verticalXMAS(data, i, j)) {
                count++;
            }
            // SAMX /\
            if (reverseVerticalXMAS(data, i, j)) {
                count++;
            }
            if (diagonalUpLeft(data, i, j)) {
                count++;
            }
            if (diagonalBottomRight(data, i, j)) {
                count++;
            }
            if (diagonalBottomLeft(data, i, j)) {
                count++;
            }
            if (diagonalUpRight(data, i, j)) {
                count++;
            }
        }
    }
    return count;
}

function isX_MAS(data: string[][], i: number, j: number) {
    if (i - 1 < 0 || i + 1 == data.length || j - 1 < 0 || j + 1 == data[i].length) {
        return false;
    }
    const options =['MAS', 'SAM']
    let diagonal_right_down = [data[i - 1][j - 1], data[i][j], data[i + 1][j + 1]];
    let diagonal_left_down = [data[i - 1][j + 1], data[i][j], data[i + 1][j - 1]];
    return options.includes(diagonal_right_down.join('')) && options.includes(diagonal_left_down.join(''));
}

export const countX_MAS = (data: string[][]) => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            // M - S
            // - A -
            // M - S
            if (isX_MAS(data, i, j)) {
                count++;
            }
        }
    }
    return count;
}
if (process.env.MAIN) {
    const fileContent = readFile('data\\day4\\input.txt');
    console.log("Results for day 4:");
    console.log("Part 1:", countXMAS(formatData(fileContent)));
    console.log("Part 2:", countX_MAS(formatData(fileContent)));
}
