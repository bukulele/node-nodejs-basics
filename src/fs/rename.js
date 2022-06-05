import { rename as myRename } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  myRename(
    __dirname + "/files/wrongFilename.txt",
    __dirname + "/files/properFilename.md",
    (err) => {
      if (err) throw new Error("FS operation failed");
    }
  );
};

rename();
