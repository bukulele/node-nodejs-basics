import { Transform } from "stream";
import { stdin, stdout } from "process";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, Array.from(chunk.toString()).reverse().join(""));
    },
  });

  stdin.pipe(reverse).pipe(stdout);
};

transform();
