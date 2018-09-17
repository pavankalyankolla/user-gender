const express = require('express');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const mongoose = require('./config/db');

const { User } = require('./models/gender');
const { userRouter } = require('./routes/gender');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/users',userRouter);

app.get('/',(req,res) => {
    res.send({
        message: 'welcome to the page'
    })
})
app.listen(port,() => {
    console.log('listening to port',port);
})