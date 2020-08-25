const net = require('net');
//const setupInput = require('./input');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
  });
/*prints the message to the screen when connection is successfully established*/
  conn.on('connect', () => {
  console.log("Successfully connected to game server");
  conn.write("Name: ISH");
  
});


  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}



// setupInput();

module.exports = connect;