import fs from 'fs';
import crypto from 'crypto';
import path from 'path';

async function handleHashCalculation(command, args, rl) {
  if(command !== 'hash') {
    return false;
  }

  const filePath = args[0];
  try {
    const absolutePath = path.resolve(process.cwd(), filePath);
    
    if (!fs.existsSync(absolutePath)) {
      console.log('Operation failed: File does not exist.');
      return;
    }

    const readableStream = fs.createReadStream(absolutePath);
    
    const hash = crypto.createHash('sha256');
    
    readableStream.on('data', (chunk) => {
      hash.update(chunk);
    });
    
    readableStream.on('end', () => {
      const hashResult = hash.digest('hex');
      console.log(`Hash for file ${filePath}: ${hashResult}`);
    });
    
    readableStream.on('error', (err) => {
      console.log('Operation failed: Error reading the file.');
    });
  } catch (err) {
    console.log('Operation failed: An unexpected error occurred.');
  } finally {
    rl.prompt();
  }

  return true;
}

export default handleHashCalculation;
