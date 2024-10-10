function printCurrentDirectory() {
    console.log(`You are currently in ${process.cwd()}`);
}

function printWelcomeMessage(username) {
    console.log(`Welcome to the File Manager, ${username}!`);
    printCurrentDirectory();
}

export default { printCurrentDirectory, printWelcomeMessage };