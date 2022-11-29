const { response, request } = require('express');

const Animal = require('../models/zoo');


const zooGet = async(req, res = response) => {
    
    //const { nombre, correo, password, rol } = req.body;
    const lion = new Animal({ sound: 'roar', speach: "I'm a lion" });
    
    console.log(lion.speak());

    const tiger = new Animal({ sound: 'grrr', speach: "Lions suck" });
    
    console.log(tiger.speak());
   

    res.json({
        lion: lion.speak(),
        tiger: tiger.speak()
    });
}







module.exports = {
    zooGet,
}