import { readdir } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  readdir(__dirname + "/files", (err, files) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    if (files) {
      files.forEach((file) => {
        console.log(file);
      });
    }
  });
};

list();
