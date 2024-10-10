import fs from 'fs/promises';
import path from 'path';

async function renameFile(oldPath, newPath, rl) {
  try {
    const absoluteOldPath = path.resolve(process.cwd(), oldPath);
    const absoluteNewPath = path.resolve(process.cwd(), newPath);

    if (absoluteOldPath === absoluteNewPath) {
      console.log('The file name is already the same, no renaming needed.');
      return;
    }

    await fs.rename(absoluteOldPath, absoluteNewPath);
    console.log(`File renamed from ${absoluteOldPath} to ${absoluteNewPath}`);
  } catch (err) {
    console.log('Operation failed');
  } finally {
    rl.prompt();
  }
}

export default renameFile;