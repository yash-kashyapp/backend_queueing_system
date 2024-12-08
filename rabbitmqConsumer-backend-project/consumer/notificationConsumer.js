const connectQueue = require('../rabbitmqConnection.js/connection');
const config = require('../config/rabbitmq.config');
const sendEmail = require('../controllers/sendMail');

async function consumeMessage() {
    let channel = await connectQueue();
    channel.consume(config.queueName, data => {
        console.log(`Email Sent on ${Buffer.from(data.content)}`);
        sendEmail(Buffer.from(data.content));
        channel.ack(data);
    });
}

module.exports = consumeMessage