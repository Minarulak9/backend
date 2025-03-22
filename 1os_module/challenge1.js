// Challenge1 from chatGPT
const os = require('os')

console.log("========System Information=========");
console.log("Operating System:" , (os.platform() == 'win32')? "Windows":os.platform());
console.log("Architecture: ",os.arch());

console.log("CPU Details:");
console.log("\tModel: ",os.cpus()[0].model);
console.log("\tSpeed: ",os.cpus()[0].speed);
console.log("Memory Details:")
console.log("\t Free Memory:",(os.freemem()/1024/1024/1024).toFixed(2)+ "GB");
console.log("\t Total Memory:",(os.totalmem()/1024/1024/1024).toFixed(2)+ "GB");
console.log("System Uptime: ",(os.uptime()/60/60).toFixed(2), "HR Before");
console.log(os.userInfo());
