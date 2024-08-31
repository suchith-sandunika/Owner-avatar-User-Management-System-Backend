const express = require('express');
const app = express();  // create express app
const cors = require('cors');
const port = 5000;
const host = '127.0.0.1';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://suchith:123@atlascluster.znyrp.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB!!");
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
};

connect();

const server = app.listen(port, host, (req, res) => {
    console.log(`Server is running on port ${server.address().port}`);
});

app.use('/api', router);