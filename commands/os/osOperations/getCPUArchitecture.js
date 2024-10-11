import os from 'os';

function getCPUArchitecture() {
    console.log(`CPU architecture: ${os.arch()}`);
}

export default getCPUArchitecture;