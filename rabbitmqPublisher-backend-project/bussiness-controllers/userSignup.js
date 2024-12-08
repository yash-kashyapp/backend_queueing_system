const knex = require('../config/knex.config');
const sendMessage = require('../publisher/notificationPublisher');

const signup = async (req, res) => {
    try {
        const input = req.body;        
        let email = await knex('users').select('recipients').where('recipients',input.email);        
        if(email.length){
            return res.send({code: 402, message: "Duplicate Email."})
        }
        let response = await knex('users').insert({
            name: input.name,
            recipients: input.email,
            status: "pending"            
        });        
        sendMessage(req.body.email);
        res.send({code: 200, message: "User Created."});
    } catch (error) {
        console.log(error);
        res.send({code: 500, message: "Server Error."});
    }
}

module.exports = signup;