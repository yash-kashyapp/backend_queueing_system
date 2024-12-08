const nodemailer = require('../mailTransport/mailTransporter');
const knex = require('../config/knex.config');


async function sendMail(data){ 
    try {        
        let transport = await nodemailer();    
        transport.sendMail({
            from: transport.options.auth.user,
            to: data,
            subject: "RabbitMq Services",
            text: "This Process is handle and develop by RabbitMq"                
        }, async function (error, info) {
            if (error) {               
                return ({ success: false, msg: 'Mail not sent!', sendStatus: 500 });
            } else {                                   
                await knex('users').update({status: "Success"}).where('recipients', JSON.parse(Buffer.from(data).toString()));
                transport.close();
                return ({ success: true, msg: 'Mail sent', sendStatus: 200 });
            }
        })    
    } catch (error) {
        return error;                
    }
}

module.exports = sendMail;