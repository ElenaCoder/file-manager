import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

async function compressFile(src, dest, rl) {
  try {
    const absoluteSrcPath = path.resolve(process.cwd(), src);
    const absoluteDestPath = path.resolve(process.cwd(), dest, path.basename(src)) + '.br';

    const readableStream = fs.createReadStream(absoluteSrcPath);
    const writableStream = fs.createWriteStream(absoluteDestPath);
    const brotliCompress = zlib.createBrotliCompress();

    readableStream.pipe(brotliCompress).pipe(writableStream);

    writableStream.on('finish', () => {
      console.log(`\n${src} compressed to ${absoluteDestPath}`);
    });

    readableStream.on('error', () => {
      console.log('Operation failed');
    });

    writableStream.on('error', () => {
      console.log('Operation failed');
    });
  } catch (err) {
    console.log('Operation failed');
  } finally {
    rl.prompt();
  }
}

export default compressFile;
