import os from 'os';

function handleOSCommands(command) {
  switch (command) {
    case '--EOL':
      console.log(`Default EOL: ${JSON.stringify(os.EOL)}`);
      break;

    case '--cpus':
      const cpus = os.cpus();
      console.log(`Total CPUs: ${cpus.length}`);
      cpus.forEach((cpu, index) => {
        console.log(`CPU ${index + 1}: ${cpu.model}, ${cpu.speed / 1000} GHz`);
      });
      break;

    case '--homedir':
      console.log(`Home directory: ${os.homedir()}`);
      break;

    case '--username':
      console.log(`System username: ${os.userInfo().username}`);
      break;

    case '--architecture':
      console.log(`CPU architecture: ${os.arch()}`);
      break;

    default:
      console.log('Invalid OS command');
      break;
  }
}

export default handleOSCommands;
