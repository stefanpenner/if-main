// my-file.mjs
import ifMain from './index.mjs';

ifMain(import.meta.url, async ([name]) => {
  console.log(`Hello, ${name}!`);
  // do stuff if the current file, is also the main file for the program
  // node <current-file>
  // if you want to exit with a non zero status code, throw an exception
  //   throw new Error('something went wrong');
  // if you want to exit with a specific status code
  //   process.exitCode = 99;
});
