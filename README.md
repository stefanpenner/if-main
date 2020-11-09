# if-main

```sh
yarn add if-main
```


```js
import ifMain from 'if-main';

ifMain(import.meta.url, async () => {
  // do stuff if the current file, is also the main file for the program
  // node <current-file>
});
```
