const fsPromises = require('fs').promises;
async function createFile (path, data){
    try {
        await fsPromises.writeFile(path,data)
        console.log("File Created Successfully!");
    } catch (error) {
        console.log(error);
    }
}

async function readFile(path) {
    try {
        let data = await fsPromises.readFile(path,"utf-8")
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function appendContent(path,newContent){
    try {
        await fsPromises.appendFile(path,newContent);
        console.log("file updated successfully.");
    } catch (error) {
        console.log(error);
    }
}

async function clearContent(path) {
    try {
        await fsPromises.writeFile(path,'');
        console.log("file cleared.");
        
    } catch (error) {
        console.log(error);
        
    }
}
async function deleteFile(path){
    try {
        await fsPromises.unlink(path)
        console.log(path,"is deleted successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}
async function renameFile(path,newPath) {
    try {
        await fsPromises.rename(path,newPath)
    } catch (error) {
        console.log(error);
    }
}

async function fileStats(path) {
    try {
       let data = await fsPromises.stat(path)
       return data;
    } catch (error) {
        console.log(error);
                
    }
}
async function watchFile(path) {
    try {
        console.log(`Watching for changes in: ${path}`);
        let prevContent = await fsPromises.readFile(path, 'utf-8'); // Initial file content
        const prevLines = prevContent.split("\n");

        const watcher = fsPromises.watch(path);
        
        for await (const event of watcher) {
            if (event.eventType === 'change') {
                let curContent = await fsPromises.readFile(path, 'utf-8');
                const curLines = curContent.split("\n");

                console.log(`\n🔄 File "${path}" changed at ${new Date().toLocaleTimeString()} 🔄\n`);

                // Compare line by line
                for (let i = 0; i < Math.max(prevLines.length, curLines.length); i++) {
                    if (prevLines[i] !== curLines[i]) {
                        console.log(`🔹 Line ${i + 1} modified:\n❌ Previous: ${prevLines[i] || 'EMPTY'}\n✅ Current: ${curLines[i] || 'EMPTY'}`);
                    }
                }

                // Update previous content
                prevContent = curContent;
            }
        }
    } catch (error) {
        console.error("Error watching file:", error);
    }
}
module.exports = {createFile,readFile,appendContent,clearContent,deleteFile,renameFile,fileStats,watchFile};