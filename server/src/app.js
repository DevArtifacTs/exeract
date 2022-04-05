const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const config = require('./config')

// import user router
const userRouter = require('./routes/user');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRouter);

const boot = async () => {
    // connect to MongoDB
    
    await mongoose.connect(config.uri)
    // start express server 
    app.listen(4000, () => {
        console.log('Server is listen to port 4000');
    });
};

boot();