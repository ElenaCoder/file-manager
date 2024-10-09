import os from 'os';
import path from 'path';
import readline from 'readline';

const username = process.argv.find(arg => arg.startsWith('--username='))?.split('=')[1];

if (!username) {
    console.log('Invalid input');
    process.exit();
  }

  console.log(`Welcome to the File Manager, ${username}!`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.on('line', (input) => {
    if (input === '.exit') {
        rl.close();
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    }
});

rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
});