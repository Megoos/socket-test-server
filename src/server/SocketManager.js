const io = require('./index.js').io;

module.exports = function(socket) {
  // console.log('\x1bc'); //clears console
  console.log('Socket Id:' + socket.id);

  //User disconnects

  socket.on('newOrders', function(data, fn) {
    console.log(data);
    fn(data.id)
  })

  socket.on('disconnect', () => {    
    console.log('Disconnect:', socket.id);  
  });

};

