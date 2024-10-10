import fs from 'fs/promises';
import path from 'path';

async function listDirectory(rl) {
  try {
    const files = await fs.readdir(process.cwd(), { withFileTypes: true });

    const directories = files.filter(dirent => dirent.isDirectory());
    const filesOnly = files.filter(dirent => dirent.isFile());

    directories.sort((a, b) => a.name.localeCompare(b.name));
    filesOnly.sort((a, b) => a.name.localeCompare(b.name));

    const sortedFiles = [...directories, ...filesOnly];

    const topBorder = '┌────────┬─────────────────────────────────────────────────────────┬────────────┐';
    const middleBorder = '  ├────────┼─────────────────────────────────────────────────────────┼────────────┤';
    const bottomBorder = '  └────────┴─────────────────────────────────────────────────────────┴────────────┘';

    console.log(topBorder);
    console.log(`  │ ${'Index'.padEnd(6)} │ ${'Name'.padEnd(38)}                  │ Type       │`);
    console.log(middleBorder);

    sortedFiles.forEach((file, index) => {
      const type = file.isDirectory() ? 'directory' : 'file';
      console.log(`  │ ${String(index).padEnd(6)} │ ${file.name.padEnd(38)}                  │ ${type.padEnd(10)} │`);
    });

    console.log(bottomBorder);
    rl.prompt();

  } catch (err) {
    console.log('Operation failed');
  }
}

export default listDirectory;
