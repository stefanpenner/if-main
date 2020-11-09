# if-main ![CI](https://github.com/stefanpenner/if-main/workflows/CI/badge.svg)


```sh
yarn add if-main
```


```js
import ifMain from 'if-main';

ifMain(import.meta.url, async ([first, second, third, arg]) => {

  // do stuff if the current file, is also the main file for the program
  // node <current-file>
  // if you want to exit with a non zero status code, throw an exception
  throw new Error(something went wrong');
  // if you want to exit with a specific status code
  process.exitCode = 99;
});
```
