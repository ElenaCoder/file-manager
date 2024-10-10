import fs from 'fs/promises';
import path from 'path';

async function removeFile(filePath, rl) {
  try {
    const absoluteFilePath = path.resolve(process.cwd(), filePath);
    await fs.unlink(absoluteFilePath);
    console.log(`${filePath} deleted successfully.`);
  } catch (err) {
    console.log(`Operation failed: ${err.message}`);
  } finally {
    rl.prompt();
  }
}

export default removeFile;
