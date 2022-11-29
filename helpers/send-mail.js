const nodemailer = require('nodemailer');


const sendMail = ( correo = '', subject = '', text = '', body = '') => {

    const mailData = {
        from: 'rotundasoftware@gmail.com',  // sender address
        to: `${correo}`,   // list of receivers
        subject: `${subject}`,
        text: `${text}`,
        html: `${body}`,
    };

    console.log(`TO: ${correo} - ${subject}`);

    try{
        const transporter = nodemailer.createTransport({
            port: 465,               // true for 465, false for other ports
            host: "smtp.gmail.com",
            auth: {
                user: process.env.MAIL,
                pass: process.env.MAIL_PASSWORD,
                },
            secure: true,
        });
    
        transporter.sendMail(mailData, function (err, info) {
            if(err){
                console.log(err);
                throw new Error(`Mail not sended. ( Posible error 2-Step Verification ).  ERROR:  ${ err }`);
            }else
                console.log(`Mail successfully sended. ${ info }`);
        });
    } catch (error) {
        handleErrors( error );
    }
    
    
}

const handleErrors = ( error ) => {

    throw new Error(`Please check mail credentials on .env file. ${error}`);

}



module.exports = {
    sendMail
}

