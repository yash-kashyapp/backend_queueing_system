const express = require('express');
const consumeMessage = require('./consumer/notificationConsumer');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

consumeMessage();

app.listen(3003, () => {
    console.log("Server running on port 3003");
})