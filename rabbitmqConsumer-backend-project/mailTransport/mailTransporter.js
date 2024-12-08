const nodemailer = require('nodemailer');

function mailTransporter(){
    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        // port: 587,
        // secure: false,
        pool: false,
        auth: {
            user: 'helpdesk@cloud-connect.in',
            pass: '3ct1Cloud@#2024'
        }
    });
}

module.exports = mailTransporter;