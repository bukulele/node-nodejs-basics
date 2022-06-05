import path from "path";
import { release, version } from "os";
import http from "http";
import "./files/c.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export let unknownObject;

export const createMyServer = http.createServer((_, res) => {
  res.end("Request accepted");
});

const doSomeRandom = async () => {
  const random = Math.random();
  if (random > 0.5) {
    import("./files/a.json", { assert: { type: "json" } }).then((response) => {
      unknownObject = response;
    });
  } else {
    import("./files/b.json", { assert: { type: "json" } }).then((response) => {
      unknownObject = response;
    });
  }
};

const consoleLogs = () => {
  console.log(`Release ${release()}`);
  console.log(`Version ${version()}`);
  console.log(`Path segment separator is "${path.sep}"`);
  console.log(`Path to current file is ${__filename}`);
  console.log(`Path to current directory is ${__dirname}`);
};

createMyServer.listen(8000);
doSomeRandom();
consoleLogs();
