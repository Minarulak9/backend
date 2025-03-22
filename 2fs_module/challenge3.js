const {createFile, readFile,appendContent, clearContent, deleteFile, renameFile, fileStats, watchFile} = require('./fileSystem');
async function run() {
    await createFile('mak.txt', "Hello, this file is created by MinarulAk.");
    await appendContent('mak.txt',`\nYou are Awesome${new Date().toString()}`);
    // await clearContent('mak.txt');
    await appendContent('mak.txt',"This is new Content boooooom")
    let data = await readFile('./mak.txt');
    console.log("File Content:", data);
    let d = await fileStats('mak.txt');
    console.log(d);
    await watchFile('mak.txt');
    // await renameFile('mak.txt','mak2.txt');
    // await deleteFile('mak.txt');
}

run();


