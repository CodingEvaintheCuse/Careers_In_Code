
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const moment = require('moment');
const fs = require('fs');

const Sequelize = require('sequelize');
const db = new Sequelize('postgres', 'postgres', 'cic', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const User = db.define('user', {
    name: Sequelize.STRING, //automatically assigns user id
    email: {type: Sequelize.STRING, unique: true, allowNull: false},
    state: Sequelize.STRING,
    birthday: Sequelize.DATE //date produces Timestamp with date and time
});

const Message = db.define('message', {
    text: {type: Sequelize.STRING, allowNull= false},
    timestamp:{
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW 
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
});

//if force = true, this will tear down and recreate all tables when you restart the server
db.sync ({
    force: false
});
//Create a new Express app
const app = express();
app.use(cors()); //add cors middleware so we can connect to a remote server from our client webpage
app.use(bodyparser).json(); //add bodyparser middleware so we can get access to req.body
app.get('/receive', (req, res)) =>