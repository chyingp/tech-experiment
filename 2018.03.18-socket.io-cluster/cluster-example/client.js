const io = require('socket.io-client');

function run () {
  const socket = io.connect('http://localhost:3000', {
    transports: ['websocket']
  });
  
  socket.on('connect', function () {
    console.log('client: connected');
  });
  
  socket.on('connect_error', function () {
    console.log('client: connect_error');
  });
  
  socket.on('error', function (errorMessage) {
    console.log('client: error, ' + errorMessage);
  });
  
  socket.on('process_info', function (data) {
    // 当 socket.io 服务端运行在cluster模式下，
    // 1、前后两次打印出不同的信息。（进程pid不同）
    // 2、每次服务端推送，客户端这边 只有单个 socket 实例 收到
    // 举例：
    // 第一次run：client: got svr process info: {"pid":57551}
    // 第二次run：client: got svr process info: {"pid":57558}
    console.log('client: got svr process info: %s', JSON.stringify(data));
  });
}

run();
run();