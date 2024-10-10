import fs from 'fs';
import path from 'path';

async function readFileContent(filePath, rl) {
  try {
    const absolutePath = path.resolve(process.cwd(), filePath);
    const readableStream = fs.createReadStream(absolutePath, 'utf-8');

    readableStream.on('data', (chunk) => {
      console.log(chunk);
    });

    readableStream.on('end', () => {
      rl.prompt();
    });

    readableStream.on('error', (err) => {
      console.log('Operation failed');
    });

  } catch (err) {
    console.log('Operation failed');
  }
}

export default readFileContent;
