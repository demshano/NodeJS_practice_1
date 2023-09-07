const os = require('os');

//info about current user
const user = os.userInfo();

console.log(user);
//  ` ` 

//method returns the system uptime in second
console.log(`the system uptime is ${os.uptime()} seconds `);

const currentOS = {
    name: os.type(),
    relese: os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}

console.log(currentOS);