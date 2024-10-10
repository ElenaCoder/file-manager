import handleNavigation  from '../commands/navigation/handleNavigation.js';
import handleFileOperations from '../commands/file/handleFileOperations.js';
import handleOSCommands from '../commands/os/handleOsCommands.js';
import handleHashCalculation from '../commands/hash/handleHashCalculation.js';
import utils from '../utils/utils.js';

function handleUserInput(input, rl) {
  const [command, ...args] = input.trim().split(' ');

  switch (command) {
    case 'up':
    case 'cd':
    case 'ls':
      handleNavigation(command, args, rl);
      break;
    case 'cat':
    case 'add':
    case 'rn':
    case 'cp':
    case 'mv':
    case 'rm':
      handleFileOperations(command, args, rl);
      break;
    case 'os':
      handleOSCommands(args[0]);
      break;
    case 'hash':
      handleHashCalculation(args[0], rl);
      break;
    case '.exit':
      rl.close();
      break;
    default:
      console.log('Invalid input');
  }

  utils.printCurrentDirectory();
}

export default { handleUserInput };