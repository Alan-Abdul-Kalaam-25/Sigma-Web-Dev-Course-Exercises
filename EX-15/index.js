import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filenme = fileURLToPath(import.meta.url);
const __dirnme = path.join(path.dirname(__filenme), "Downloads");

const files = fs.readdirSync(__dirnme);

function organizeFiles() {
  files.forEach((file) => {
    const filePath = path.join(__dirnme, file);

    if (
      fs.statSync(filePath).isDirectory() ||
      file.endsWith(".js") ||
      file.endsWith(".json")
    ) {
      return;
    }

    const ext = path.extname(file).slice(1);

    if (!ext) return;

    const folderPath = path.join(__dirnme, ext);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    const destPath = path.join(folderPath, file);
    fs.renameSync(filePath, destPath);
    console.log(`Moved ${file} to ${folderPath}`);
  });
}

organizeFiles();
