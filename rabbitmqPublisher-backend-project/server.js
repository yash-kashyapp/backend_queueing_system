const express = require('express');
const sendMessage = require('./publisher/notificationPublisher');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/routes.service'));

app.listen(3002, () => {
    console.log(`server lisitng on 3002.`)
})