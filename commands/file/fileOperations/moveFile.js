import fs from 'fs';
import path from 'path';

async function moveFile(src, dest, rl) {
  try {
    const absoluteSrcPath = path.resolve(process.cwd(), src);
    const absoluteDestPath = path.resolve(process.cwd(), dest, path.basename(src));

    const readStream = fs.createReadStream(absoluteSrcPath);
    const writeStream = fs.createWriteStream(absoluteDestPath);

    readStream.pipe(writeStream);

    writeStream.on('finish', async () => {
      try {
        await fs.promises.unlink(absoluteSrcPath);
        console.log(`${absoluteSrcPath} moved to ${absoluteDestPath}`);
      } catch (err) {
        console.log(`Failed to delete source file: ${err.message}`);
      }
    });

    readStream.on('error', (err) => {
      console.log(`Error reading file: ${err.message}`);
    });

    writeStream.on('error', (err) => {
      console.log(`Error writing file: ${err.message}`);
    });
  } catch (err) {
    console.log(`Operation failed: ${err.message}`);
  } finally {
    rl.prompt();
  }
}

export default moveFile;
