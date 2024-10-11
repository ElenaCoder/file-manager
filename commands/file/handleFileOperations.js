import readFileContent from './fileOperations/readFileContent.js';
import createFile from './fileOperations/createFile.js';
import renameFile from './fileOperations/renameFile.js';
import copyFile from './fileOperations/copyFile.js';
import moveFile from './fileOperations/moveFile.js';
import removeFile from './fileOperations/removeFile.js';

function handleFileOperations(command, args, rl) {
  switch (command) {
    case 'cat':
      readFileContent(args[0], rl);
      break;
    case 'add':
      createFile(args[0], rl);
      break;
    case 'rn':
      renameFile(args[0], args[1], rl);
      break;
    case 'cp':
      copyFile(args[0], args[1], rl);
      break;
    case 'mv':
      moveFile(args[0], args[1], rl);
      break;
    case 'rm':
      removeFile(args[0], rl);
      break;
    default:
        return false;
    }

    return true;
}

export default handleFileOperations;