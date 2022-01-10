const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const day = 86400;

const authConfig = require('../config/auth');

const ExternalUsers = require('../models/externalUsers');
const InternalUsers = require('../models/internalUsers');

const router = express.Router();

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 1*day,
    });
}

router.post('/register', async(req, res)=>{
    const { email, password, cnpj } = req.body;

    try{
        if(await ExternalUsers.findOne({ email, cnpj }))
            return res.status(400).send({ erroor: 'User already exists'})

        const user = await User.create(req.body);

        user.password = undefined;

        res.send({ 
            user,
             token: generateToken({id: user.id}),
            });
    } catch(err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.post('/authenticate', async(req, res)=>{
    const { email, password } = req.body;

    const user = await ExternalUsers.findOne({ email }).select('+password');

    if(!user)
        return res.status(400).send({ error: 'User not found'});

    if(!await bcrypt.compare(password, user.password))
    return res.status(400).send({ error: 'Invalid password'});

    user.password = undefined;

    res.send({ 
        user,
         token: generateToken({id: user.id}),
        });
});


router.post('/internal/authenticate', async(req, res)=>{
    const { email, password } = req.body;

    const user = await InternalUsers.findOne({ email }).select('+password');

    if(!user)
        return res.status(400).send({ error: 'User not found'});

    if(!await bcrypt.compare(password, user.password))
    return res.status(400).send({ error: 'Invalid password'});

    user.password = undefined;

    res.send({ 
        user,
         token: generateToken({id: user.id}),
        });
});

module.exports = app => app.use('/auth', router);