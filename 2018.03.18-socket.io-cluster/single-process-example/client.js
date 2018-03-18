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
    // 1、前后两次打印消息一致
    // 2、服务端推送，两次创建的socket实例都收到
    // 打印消息：client: got svr process info: {"pid":57387}
    console.log('client: got svr process info: %s', JSON.stringify(data));
  });
}

run();
run();