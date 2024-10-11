import os from 'os';

function getEOL() {
    console.log(`Default EOL: ${JSON.stringify(os.EOL)}`);
}

export default getEOL;