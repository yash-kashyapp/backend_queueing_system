const amqp = require("amqplib");
const config = require('../config/rabbitmq.config');
async function connectQueue() {   
    try {        
        let connection = await amqp.connect(config.rabbitmqUrl);
        let channel = await connection.createChannel();
        await channel.assertQueue(config.queueName, { durable: true });
        return channel;    
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectQueue;