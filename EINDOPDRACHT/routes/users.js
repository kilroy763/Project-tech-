const express = require('express');

const router = express.Router();

const bcrypt = require('bcryptjs');

// User model
const User = require('../models/User');

// login

router.get('/login' ,(req, res) => res.render('login'));

//register 

router.get('/register' ,(req, res) => res.render('register'));

//Register handle

router.post('/register', (req, res) => {
    const{ name, email, password, password2} = req.body;
    let errors = [];

    //check required fields
    if(!name || !email || !password || !password2){
            errors.push({ msg: 'Alles invullen AUB'});
    }

    //check password match
    if(password !== password2){
        errors.push ({ msg: 'Wachtwoord kloppen niet'});
    }

    // check pass length
    if(password.length < 4){
        errors.push({ msg: 'wachtwoord moet langer'});
    }

    if(errors.length > 0 ){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    } else{
        //validation passed
        User.findOne({ email: email })
        .then(user => {
            if(user){
                //user exists
                errors.push({ msg: 'email is al geregistreerd'});
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            } else{
                const newUser = new User({
                    name,
                    email,
                    password
                });

                
            }
        });

    }
});


module.exports = router;