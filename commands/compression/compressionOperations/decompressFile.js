import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

async function decompressFile(src, dest, rl) {
  try {
    const absoluteSrcPath = path.resolve(process.cwd(), src);
    const absoluteDestPath = path.resolve(process.cwd(), dest, path.basename(src, '.br'));

    const readableStream = fs.createReadStream(absoluteSrcPath);
    const writableStream = fs.createWriteStream(absoluteDestPath);
    const brotliDecompress = zlib.createBrotliDecompress();

    readableStream.pipe(brotliDecompress).pipe(writableStream);

    writableStream.on('finish', () => {
      console.log(`\n${src} decompressed to ${absoluteDestPath}`);
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

export default decompressFile;
