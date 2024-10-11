import goUp from './navigationOperations/goUp.js';
import changeDirectory from './navigationOperations/changeDirectory.js';
import listDirectory from './navigationOperations/listDirectory.js'

function handleNavigation(command, args, rl) {
  switch (command) {
    case 'up':
      goUp();
      break;
    case 'cd':
      changeDirectory(args[0]);
      break;
    case 'ls':
      listDirectory(rl);
      break;
    default:
      return false;
  }

  return true;
}

export default handleNavigation;