import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

async function compressFile(src, dest, rl) {
  try {
    const absoluteSrcPath = path.resolve(process.cwd(), src);
    const absoluteDestPath = path.resolve(process.cwd(), dest, path.basename(src)) + '.br';

    if (!fs.existsSync(absoluteSrcPath)) {
      console.log(`Source file does not exist: ${absoluteSrcPath}`);
      return;
    }

    console.log(`\nCompressing...`);

    const readableStream = fs.createReadStream(absoluteSrcPath);
    const writableStream = fs.createWriteStream(absoluteDestPath);
    const brotliCompress = zlib.createBrotliCompress();

    return new Promise((resolve, reject) => {
      readableStream
        .pipe(brotliCompress)
        .pipe(writableStream)
        .on('finish', () => {
          console.log(`\n${src} successfully compressed to ${absoluteDestPath}`);
          resolve();
        })
        .on('error', (err) => {
          console.log('Compression failed due to an error:', err.message);
          reject(err);
        });
    });
  } catch (err) {
    console.log('Operation failed:', err.message);
  }
}

export default compressFile;
