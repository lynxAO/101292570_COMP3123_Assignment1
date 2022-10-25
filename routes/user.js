const { Router } = require('express');
const express = require('express');
const userModels = require('../models/User');

const app = express.Router();

const routes = express.Router();
const UserModel = require('../models/User');

routes.post('/signup', async (req, res) => {
    try{
        await userModels.sa
        const newUser = new userModels(req.body);
        const user = await newUser.save();
        res.status(200).send(user)
    } catch(err){
        res.status(400).send(err);
    }
});

routes.post('/login', async (req, res) => {
    try{
        const userExist = await userModels.findOne({email: req.body.email, password: req.body.password});
        const user = await userExist.save({email: req.body, password: req.body.password})
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = routes;