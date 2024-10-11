import os from 'os';

function getHomeDir() {
    console.log(`Home directory: ${os.homedir()}`);
}

export default getHomeDir;