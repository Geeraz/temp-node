const os = require("os");

// info about current user
const user = os.userInfo();
// console.log(user);

// method returns the system uptime in second

console.log(`The System Uptime is ${os.uptime() / 3060} minutes`);

const currentOS = {
  name: os.type(),
  relase: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
