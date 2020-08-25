const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541,
  });
/*prints the message to the screen when connection is successfully established*/
  conn.on('connect', () => {
  console.log("Successfully connected to game server");
  conn.write("Name: ISH");
});

/* timers to move our cursor in different directions*/
// conn.on('connect', () => {
  
//   // setTimeout(() => conn.write("Move: up"),1000);
//   // setTimeout(() => conn.write("Move: left"),3000);
//   // setTimeout(() => conn.write("Move: up"),5000);
//   // setTimeout(() => conn.write("Move: right"),7000);
//   // setInterval(() => conn.write("Move: left"),500)
// })





  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = connect;