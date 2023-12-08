module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server, {  });

    //check if connection, then console.log
    primus.on('connection', (spark) => {
        console.log('connected');

        //check if data is received, then console.log
        spark.on('data', (data) => {
            console.log(data, 'data received');
            //send data back to all clients
            primus.write(data);
        });


    });


};
