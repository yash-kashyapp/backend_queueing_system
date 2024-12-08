module.exports = {
    rabbitmqUrl: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
    queueName: process.env.QUEUE_NAME || 'rabbitmq-email-system',
};