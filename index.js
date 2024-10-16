import os from 'os';
import readline from 'readline';
import handleUserInputModule from './input/handleUserInput.js';
const { handleUserInput } = handleUserInputModule;
import utils from './utils/utils.js';

// Set the initial working directory to the user's home directory
process.chdir(os.homedir());

const username = process.argv.find(arg => arg.startsWith('--username='))?.split('=')[1];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

utils.printWelcomeMessage(username);

rl.on('line', (input) => {
    handleUserInput(input, rl);
    utils.printCurrentDirectory();
    rl.prompt();
});

rl.on('close', () => {
  utils.printGoodbyeMessage(username);
  process.exit(0);
});

rl.prompt();