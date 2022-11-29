//const express = require('express');

class Animal {

    constructor(animal) {
        this.speach = animal.speach;
        this.sound = animal.sound;
    }

    speak(){
        return this.speach.replace(' ', ` ${this.sound} `) + ` ${this.sound}`;
    }

}

module.exports = Animal;
