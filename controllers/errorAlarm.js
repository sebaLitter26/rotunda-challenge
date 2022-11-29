const { response, request } = require('express');
const { sendMail } = require('../helpers/send-mail');

let count = 0;
let alreadyMailed = false;

const TIMOUT = 60000  // 1 minute

logError = ( error ) => {
    if(!alreadyMailed){
        count = 0;
        alreadyMailed = true;
        
        //Send Mail Helper. Parameters -> mail, subject, text, body
        sendMail('sebastian_litter@hotmail.com', 'Too many attempts on text file logger', 'Please, fix this error on logger file', `${error}`);
        setTimeout( ()=>{
            alreadyMailed = false;
        }, TIMOUT);
    }

    
   
}

const alarmGet = async(req, res = response) => {
    
    //const { nombre, correo, password, rol } = req.body;
    count++;
    if(count>10 && !alreadyMailed){
        logError('More than 10 attempts to access logger file');   
    }
        

    res.json({ 
        error_counts: count
    });
}




module.exports = {
    alarmGet,
    
}
