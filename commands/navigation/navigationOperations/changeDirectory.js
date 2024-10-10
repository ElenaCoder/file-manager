import path from 'path';

function changeDirectory(newPath) {
  try {
    const targetPath = path.isAbsolute(newPath) ? newPath : path.join(process.cwd(), newPath);
    process.chdir(targetPath);
  } catch (err) {
    console.log('Operation failed');
  }
}

export default changeDirectory;