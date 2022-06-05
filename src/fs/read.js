import { readFile } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  readFile(__dirname + "/files/fileToRead.txt", "utf8", (err, data) => {
    if (err) {
      throw new Error("FS operation failed");
    } else if (data) {
      console.log(data);
    }
  });
};

read();
