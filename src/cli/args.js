export const parseArgs = () => {
  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i].match(/^--[a-zA-Z]+/) && process.argv[i + 1]) {
      console.log(`${process.argv[i]} is ${process.argv[i + 1]}`);
    }
  }
};

parseArgs();
