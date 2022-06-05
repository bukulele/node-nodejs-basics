import { readFile } from "fs/promises";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  const hash = createHash("sha256");
  const file = readFile(
    __dirname + "/files/fileToCalculateHashFor.txt",
    "utf8"
  );
  const result = await file.then((data) => {
    hash.update(data);
    return hash.digest("hex");
  });
  return result;
};

const final = calculateHash();
final.then((result) => console.log(result));
