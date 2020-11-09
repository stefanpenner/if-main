import { fileURLToPath } from 'url';

export default async function ifMain(url, cb, _process = process) {
  if (_process.argv[1] !== fileURLToPath(url)) {
    return false;
  }
  if (arguments.length === 1) {
    return true;
  }
  await cb(_process.argv.slice(2));
  return true;
}
