import fs from 'fs';
import path from 'path';

async function copyFile(src, dest, rl) {
  try {
    const absoluteSrcPath = path.resolve(process.cwd(), src);
    const absoluteDestPath = path.resolve(process.cwd(), dest, path.basename(src));

    await fs.promises.mkdir(path.dirname(absoluteDestPath), { recursive: true });

    const readableStream = fs.createReadStream(absoluteSrcPath);
    const writableStream = fs.createWriteStream(absoluteDestPath);

    readableStream.pipe(writableStream);

    writableStream.on('finish', () => {
      console.log(`${src} copied to ${absoluteDestPath}`);
    });

    readableStream.on('error', (err) => {
      console.log(`Failed to read file: ${err.message}`);
    });

    writableStream.on('error', (err) => {
      console.log(`Failed to write file: ${err.message}`);
    });
  } catch (err) {
    console.log(`Operation failed: ${err.message}`);
  } finally {
    rl.prompt();
  }
}

export default copyFile;
