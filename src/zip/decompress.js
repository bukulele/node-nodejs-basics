import { createGunzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
  const unzip = createGunzip();
  const archive = createReadStream(__dirname + "/files/archive.gz");
  const file = createWriteStream(__dirname + "/files/fileToCompress.txt");

  pipeline(archive, unzip, file, (err) => {
    if (err) {
      process.exitCode = 1;
      throw new Error(err);
    }
  });
};

decompress();
