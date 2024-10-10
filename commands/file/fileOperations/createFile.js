import fs from 'fs/promises';

async function createFile(fileName, rl) {
  try {
    await fs.writeFile(fileName, '');
    console.log(`The ${fileName} created successfully.`);
    rl.prompt();
  } catch (err) {
    console.log('Operation failed');
  }
}

export default createFile;