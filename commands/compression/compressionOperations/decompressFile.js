import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

async function decompressFile(src, dest, rl) {
  try {
    const absoluteSrcPath = path.resolve(process.cwd(), src);
    const absoluteDestPath = path.resolve(process.cwd(), dest, path.basename(src, '.br'));

    if (!fs.existsSync(absoluteSrcPath)) {
      console.log(`Source file does not exist: ${absoluteSrcPath}`);
      return;
    }

    console.log(`\nDecompressing...`);

    const readableStream = fs.createReadStream(absoluteSrcPath);
    const writableStream = fs.createWriteStream(absoluteDestPath);
    const brotliDecompress = zlib.createBrotliDecompress();

    return new Promise((resolve, reject) => {
      readableStream
        .pipe(brotliDecompress)
        .pipe(writableStream)
        .on('finish', () => {
          console.log(`\n${src} successfully decompressed to ${absoluteDestPath}`);
          resolve();
        })
        .on('error', (err) => {
          console.log('Decompression failed due to an error:', err.message);
          // Delete the incomplete file
          if (fs.existsSync(absoluteDestPath)) {
            fs.unlinkSync(absoluteDestPath);
          }
          reject(err);
        });

      readableStream.on('error', (err) => {
        console.log('Error reading source file:', err.message);
        reject(err);
      });

      writableStream.on('error', (err) => {
        console.log('Error writing destination file:', err.message);
        // Delete the incomplete file
        if (fs.existsSync(absoluteDestPath)) {
          fs.unlinkSync(absoluteDestPath);
        }
        reject(err);
      });
    });
  } catch (err) {
    console.log('Operation failed:', err.message);
  }
}

export default decompressFile;
