module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server, { 
        reconnect: {
            max: Infinity // Number: The max delay before we try to reconnect.
          , min: 500 // Number: The minimum delay before we try reconnect.
        }
     });

    //check if connection, then console.log
 primus.on('connection', (spark) => {

      // Send 'ping' every 30 seconds to keep the connection alive
      const intervalId = setInterval(() => {
        spark.write('ping');
    }, 30000);


        console.log('connected');

        spark.on('data', async (data) => {
            console.log(data, 'data received');

            // Send data back to all clients
            primus.write(data);
        });

    });

    //check if disconnection, then console.log
    primus.on('disconnection', (spark) => {
        console.log('disconnected');
        clearInterval(intervalId);
    });


};
