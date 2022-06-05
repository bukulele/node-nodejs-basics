export const parseEnv = () => {
  for (let key in process.env) {
    if (key.match(/^RSS_/)) {
      console.log(`${key}=${process.env[key]}`);
    }
  }
};

parseEnv();
