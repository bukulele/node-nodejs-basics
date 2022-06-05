import { createGzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const compress = async () => {
  const gzip = createGzip();
  const file = createReadStream(__dirname + "/files/fileToCompress.txt");
  const archive = createWriteStream(__dirname + "/files/archive.gz");

  pipeline(file, gzip, archive, (err) => {
    if (err) {
      process.exitCode = 1;
      throw new Error(err);
    }
  });
};

compress();
