// The 'os' module provides operating system-related utility methods and properties.
// It is a built-in module, so no installation is required.

const os = require("os");

// os.arch(): returns the operating system CPU architecture
const cpuArchitecture = os.arch(); // Example Output: 'x64'

// os.cpus(): returns an array of objects containing information about each logical CPU core
const cpuInfo = os.cpus();
console.log(cpuInfo);

// // os.freemem(): returns the amount of free system memory in bytes
// const freeMemoryBytes = os.freemem();
// const freeMemoryGB = (freeMemoryBytes / 1024 / 1024 / 1024).toFixed(2);
// console.log(`Free Memory: ${freeMemoryGB} GB`);
// // Example Output: 'Free Memory: 4.56 GB'

// // os.totalmem(): returns the total amount of system memory in bytes
// const totalMemoryBytes = os.totalmem();
// const totalMemoryGB = (totalMemoryBytes / 1024 / 1024 / 1024).toFixed(2);
// console.log(`Total Memory: ${totalMemoryGB} GB`);
// // Example Output: 'Total Memory: 16.00 GB'

// // os.homedir(): returns the string path of the current user's home directory
// const homeDirectory = os.homedir();
// console.log(`Home Directory: ${homeDirectory}`);
// // Example Output on Windows: 'C:\Users\YourUsername'

// // os.hostname(): returns the hostname of the operating system
// const hostname = os.hostname();
// console.log(`Hostname: ${hostname}`);
// // Example Output: 'DESKTOP-ABCDEFG'

// // os.platform(): returns a string identifying the operating system platform
// const platform = os.platform();
// console.log(`OS Platform: ${platform}`);
// // Example Output on Windows: 'win32'

// // os.release(): returns the operating system release as a string
// const release = os.release();
// console.log(`OS Release: ${release}`);
// // Example Output on Windows: '10.0.19045'

// // os.type(): returns the operating system name
// const osType = os.type();
// console.log(`OS Type: ${osType}`);
// // Example Output on Windows: 'Windows_NT'

// // os.uptime(): returns the system uptime in seconds
// const uptimeSeconds = os.uptime();
// const uptimeMinutes = (uptimeSeconds / 60).toFixed(0);
// console.log(`System Uptime: ${uptimeMinutes} minutes`);
// // Example Output: 'System Uptime: 25 minutes'

// // os.userInfo(): returns an object with information about the current effective user
// const userInfo = os.userInfo();
// console.log(`User Info:`);
// console.log(userInfo);
// /* Example Output:
// {
//   uid: -1,
//   gid: -1,
//   username: 'YourUsername',
//   homedir: 'C:\\Users\\YourUsername',
//   shell: null
// }
// */

// // os.constants: provides an object containing operating system-specific constants
// // A useful constant is os.constants.EOL for the end-of-line marker
// const EOL = os.EOL;
// console.log(`End-of-Line Marker: "${EOL}"`);
// // Example Output on Windows: "
// // "
// // Note: It prints as a new line. To see the characters, you would need to escape it or stringify it.
