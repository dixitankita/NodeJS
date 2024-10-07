const os = require('os');

const platform = os.platform();
const architecture = os.arch();
const cpuCount = os.cpus().length;
const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2);
const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2);
const uptime = (os.uptime() / 3600).toFixed(2);
const hostname = os.hostname();

console.log(`Operating System Information:`);
console.log(`Platform: ${platform}`);
console.log(`Architecture: ${architecture}`);
console.log(`Number of CPUs: ${cpuCount}`);
console.log(`Total Memory: ${totalMemory} GB`);
console.log(`Free Memory: ${freeMemory} GB`);
console.log(`System Uptime: ${uptime} hours`);
console.log(`Hostname: ${hostname}`);
