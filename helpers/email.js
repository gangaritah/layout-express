const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: 'correo_remitente',
        pass: 'password_correo_remitente'
    }
});


let sendRegisterMessage = (to) => {
    let mailOptions = {
        from: 'correo_remitente',
        to: to,
        subject: 'Bienvenido',
        html: '<h1>Gracias por registrare en nuestro sitio</h1><p>Esperamos tengas la mejor de las experiencias.</p>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo enviado: ' + info.response);
        }
    });

}

module.exports = {sendRegisterMessage};

