const { Router } = require('express');
const express = require('express');
const employee_model = require('../models/Employee');
const routes = require('./user');

const app = express.Router();

app.get('/employee', async(req, res) => {
    try {
        const employee = await employee_model.find();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/employee', async(req, res) => {
    try {
        const newEmployee = new employee_model(req.body);
        const employee = await newEmployee.save();
        res.status(202).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/employee/:_Id', async(req, res) => {
    try{
        const findEmployee = await employee_model.findById(req.params.emp_id);
        res.status(201).send(findEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.put('/employee/:emp_id', async(req, res) => {
    try{
        const newEmployee = await employee_model.findByIdAndUpdate(req.params.emp_id);
        res.status(201).send(newEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/employee/:emp_id', async(req, res) => {
    try {
        const deleteEmployee = await employee_model.findByIdAndDelete(req.params.emp_id);
        res.status(202).send(deleteEmployee);
    } catch (error) {
        res.status(400).send(error);
    }

});

module.exports = routes;