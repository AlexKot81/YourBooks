const express = require('express');
require('dotenv').config();
require('./models/models');

const cors = require('cors');
const authorRouter = require('./router/authorRouter');

const sequelize = require('./db');
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/', authorRouter);

const start = async () =>{
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ()=>{
            console.log('Сервер запущен...')
        })
    }catch(err){
        console.log(err)
    }
}

start();


