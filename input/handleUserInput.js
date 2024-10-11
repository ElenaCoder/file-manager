import handleNavigation  from '../commands/navigation/handleNavigation.js';
import handleFileOperations from '../commands/file/handleFileOperations.js';
import handleOSCommands from '../commands/os/handleOsCommands.js';
import handleHashCalculation from '../commands/hash/handleHashCalculation.js';
import handleCompression from '../commands/compression/handleCompression.js';

const commandHandlers = [
    handleNavigation,
    handleFileOperations,
    handleOSCommands,
    handleHashCalculation,
    handleCompression,
];



async function handleUserInput(input, rl) {
  const [command, ...args] = input.trim().split(' ');

  let isCommandHandled = false;

  for (const handler of commandHandlers) {
    if (await handler(command, args, rl)) {
      isCommandHandled = true;
      break;
    }
  }

  if (!isCommandHandled) {
    if (command === '.exit') {
      rl.close();
    } else {
      console.log('Invalid input');
    }
  }
}

export default { handleUserInput };