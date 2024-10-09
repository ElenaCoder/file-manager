import os from 'os';
import path from 'path';
import readline from 'readline';

const username = process.argv.find(arg => arg.startsWith('--username='))?.split('=')[1];

if (!username) {
    console.log('Invalid input');
    process.exit();
  }

  console.log(`Welcome to the File Manager, ${username}!`);
