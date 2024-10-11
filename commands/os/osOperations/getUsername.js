import os from 'os';

function getUsername() {
    console.log(`System username: ${os.userInfo().username}`);
}

export default getUsername;