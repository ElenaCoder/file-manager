import compressFile from './compressionOperations/compressFile.js';
import decompressFile from './compressionOperations/decompressFile.js';

function handleCompression(command, args, rl) {
  const [src, dest] = args;

  switch (command) {
    case 'compress':
      compressFile(src, dest, rl);
      break;
    case 'decompress':
      decompressFile(src, dest, rl);
      break;
    default:
      console.log('Invalid compression command');
      rl.prompt();
  }
}

export default handleCompression;
