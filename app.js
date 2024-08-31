const express = require('express');
const app = express();  // create express app
const cors = require('cors');
const controller = require('./controller');

app.use(cors());
app.use((express.urlencoded({ extended: true }))); // to encode data ...
app.use(express.json()); // to parse json data ...

// get all users ...
app.get('/users', (req, res) => {
    var resObj = [];

    controller.getUsers(req, res, next => {
        res.send();
    })
});

// get a selected user ...
app.get('/user', (req, res) => {
    const id = req.query.id;

    controller.getUserById(id, user => {
        res.send(user);
    });
});

// add a user ...
app.post('/createuser', (req, res) => {
    controller.AddUser(req.body, (callback) => {
        res.send(callback);
    });
});

// update a user ... (CAN USE POST ...)
app.put('/updateuser', (req, res) => {
    controller.UpdateUser(req.body, (callback) => {
        res.send(callback);
    });
});

// delete a user ... (CAN USE POST ...)
app.delete('/deleteuser', (req, res) => {
    controller.DeleteUser(req.body, (callback) => {
        res.send(callback);
    });
});

module.exports = app;