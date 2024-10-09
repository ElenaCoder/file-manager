import os from 'os';
import path from 'path';
import readline from 'readline';

function printCurrentDirectory() {
    console.log(`You are currently in ${process.cwd()}`);
}

function printWelcomeMessage(username) {
    console.log(`Welcome to the File Manager, ${username}!`);
    printCurrentDirectory();
}

function handleUserInput(input) {
    switch (input.trim()) {
      case '.exit':
        printCurrentDirectory();
        rl.close();
        break;
      default:
        console.log(`Command not recognized: ${input}`);
        printCurrentDirectory();
    }
  }

const username = process.argv.find(arg => arg.startsWith('--username='))?.split('=')[1]|| 'User';
printWelcomeMessage(username);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    handleUserInput(input);
});

rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
});