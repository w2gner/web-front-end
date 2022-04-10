const readline = require('readline');

function getInput() {
    return new Promise(resolve => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: 'Input: '
        });

        rl.prompt();

        rl.on('line', (line) => {
            rl.close();
            resolve(line);
        });
    });
}

module.exports = getInput;