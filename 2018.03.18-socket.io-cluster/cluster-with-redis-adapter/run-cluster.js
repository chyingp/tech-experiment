const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  require('./server');
  console.log(`Worker ${process.pid} started`);
}

// 打印日志如下（举例）：
// Master 57550 is running
// Worker 57555 started
// Worker 57556 started
// Worker 57558 started
// Worker 57554 started
// Worker 57551 started
// Worker 57553 started
// Worker 57552 started
// Worker 57557 started