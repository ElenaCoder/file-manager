import path from 'path';

function goUp() {
  const currentDir = process.cwd();
  const rootDir = path.parse(currentDir).root;

  if (currentDir === rootDir) {
    console.log('You are already at the root directory.');
  } else {
    try {
      process.chdir('..');
    } catch (err) {
      console.log('Operation failed:', err.message);
    }
  }
}

export default goUp;