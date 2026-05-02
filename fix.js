import fs from 'fs';
import path from 'path';

const filePath = './src/data/courseData.ts';
let content = fs.readFileSync(filePath, 'utf-8');

let lines = content.split('\n');
let currentModuleId = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Match module id, e.g., id: "module-1.1"
  const moduleMatch = line.match(/id:\s*"module-([^"]+)"/);
  if (moduleMatch) {
    currentModuleId = moduleMatch[1]; // e.g., "1.1"
  }

  if (currentModuleId) {
    // Replace id: "page-X", skipping if it already has m prefix
    if (line.match(/id:\s*"page-\d+"/)) {
      lines[i] = line.replace(/id:\s*"page-(\d+)"/, `id: "m${currentModuleId}-page-$1"`);
    }

    // Replace hintPageId: "page-X"
    if (line.match(/hintPageId:\s*"page-\d+"/)) {
      lines[i] = line.replace(/hintPageId:\s*"page-(\d+)"/, `hintPageId: "m${currentModuleId}-page-$1"`);
    }
  }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
console.log("Done updating courseData.ts");
