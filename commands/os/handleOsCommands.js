import getEOL from './osOperations/getEOL.js';
import getCPUs from './osOperations/getCPUs.js';
import getHomeDir from './osOperations/getHomeDir.js';
import getUsername from './osOperations/getUsername.js';
import getCPUArchitecture from './osOperations/getCPUArchitecture.js';

function handleOSCommands(command, args, rl) {
  if(command !== 'os') {
    return false;
  }

  switch (args[0]) {
    case '--EOL':
      getEOL();
      break;
    case '--cpus':
      getCPUs();
      break;
    case '--homedir':
      getHomeDir();
      break;
    case '--username':
      getUsername();
      break;
    case '--architecture':
      getCPUArchitecture();
      break;
    default:
      console.log('Invalid OS command');
      break;
  }

  return true;
}

export default handleOSCommands;
