const connectQueue  = require('../rabbitmqConnection.js/connection');
const config = require('../config/rabbitmq.config');

async function sendData (data) {       
    let channel = await connectQueue();    
    channel.sendToQueue(config.queueName, Buffer.from(JSON.stringify(data)));            
    console.log(`Message sent: ${data}`);
    setTimeout(() => {
        channel.close();
        // connection.close();
    }, 500);
}

module.exports = sendData;