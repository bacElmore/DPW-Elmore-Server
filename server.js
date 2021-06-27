const express = require('express');
//Set View Engine for EJS
const app = express();

const mysql = require('mysql');
var path = require('path');
require('dotenv/config');
const readline = require('readline');
const Joi = require('joi');
const ejs = require('ejs');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const request = require('request');
//FOR SENDING EMAIL
const nodeMailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
var bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const { clear } = require('console');


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const uri = process.env.mongoDB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


//Root page
app.get('/', (req,res) => {
    res.json('Test: "Test"');
});

app.get('/mongo', async (req,res) => {
    let Name = async () => {
        await client.connect();
        const collection = await client.db("testDPW").collection("testDPW_DB").find().toArray();
        return collection[0];
        client.close();
    };
    var Data = "";
    await Name().then(function (value) {
        Data = value;
    });
    res.send(Data);
    console.log(Data);
});

const serverPort = process.env.PORT;
app.listen(serverPort, () => console.log(`Listening on Port ${serverPort}`));