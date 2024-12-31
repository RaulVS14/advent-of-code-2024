import fs from 'fs';
import { execSync } from 'node:child_process'

const args = process.argv.slice(2);
const [day] = args;
console.log("Welcome, to the new day", day, "!")
if (!day) {
  console.error("Please provide a day name.");
  process.exit(1);
}
const srcFolder = `src/day${day}`;
const dataFolder = `data/day${day}`;
const testsFolder = `tests`;

function createFolder(folderName: string) {
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }
}

function createFile(fileName: string, content: string) {
  try {
    if (!fs.existsSync(fileName)) {
      fs.writeFileSync(fileName, content, 'utf8');
    }
  } catch (err) {
    console.error(err);
  }
}

function gitAdd(fileName: string) {
  try {
    execSync(`git add ${fileName}`, { stdio: 'inherit' });
    console.log(`File "${fileName}" added to Git.`);
  } catch (err) {
    console.error(err);
  }
}

function updatePackageScripts() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

  const newScriptName = `day${day}`;
  const newScriptCommand = `set \"MAIN=true\" && npm run compile &&  node .\\build\\day${day}\\day${day}.js`;

  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts[newScriptName] = newScriptCommand;

  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf8');

  console.log(`Script "${newScriptName}" added to package.json!`);
}

function main() {
  // Create Day folder in source and data
  createFolder(srcFolder);
  createFolder(dataFolder);

  const files: string[][] = [
    [`${srcFolder}/day${day}.ts`, "import { readFile } from \"@/utils\";\n\nexport const formatData = (data: string[]) => {\n}\n\n" +
    "if (process.env.MAIN) {\n" +
    `  const fileContent = readFile('data\\\\day${day}\\\\input.txt');\n` +
    `  console.log("Results for day ${day}:");\n` +
    "  console.log(\"Part 1:\", formatData(fileContent));\n" +
    "  console.log(\"Part 2:\", formatData(fileContent));\n" +
    "}"],
    [`${srcFolder}/index.ts`, `export * from "./day${day}"`],
    [`${dataFolder}/input.txt`, ""],
    [`${testsFolder}/day${day}.spec.ts`, `import { formatData } from "../src/day${day}";\n\n`+
    `test(\"day${day}.formatData\", () => {\n` +
    "    expect(formatData([])).toStrictEqual([])\n" +
    "})"],
  ]

  // Add files to src/day<>, tests/ and data/day<> and to git for VCS tracking
  for (const file of files) {
    createFile(file[0], file[1]);
    gitAdd(file[0])
  }

  // Add script step for day<> in package.json
  updatePackageScripts();
}

main();
