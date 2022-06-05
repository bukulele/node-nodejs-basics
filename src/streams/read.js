import fs from "fs";
import { stdout } from "process";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const stream = fs.createReadStream(__dirname + "/files/fileToRead.txt");
  stream.pipe(stdout);
};

read();
