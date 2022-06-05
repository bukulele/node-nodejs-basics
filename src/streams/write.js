import fs from "fs";
import { stdin } from "process";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  const stream = fs.createWriteStream(__dirname + "/files/fileToWrite.txt");
  stdin.pipe(stream);
};

write();
